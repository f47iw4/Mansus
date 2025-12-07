<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\User;

class AdminLoginController extends Controller
{
    public function showLoginForm()
    {
        return view('admin.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Buscar usuario manualmente (sin crear sesión web)
        $user = User::where('email', $credentials['email'])->first();

        // Verificar credenciales manualmente
        if (!$user || !\Hash::check($credentials['password'], $user->password)) {
            return back()->withErrors([
                'email' => 'Las credenciales no coinciden con nuestros registros.',
            ]);
        }

        // Verificar que sea admin
        if ($user->role !== 'admin') {
            return back()->withErrors([
                'email' => 'No tienes permisos de administrador.',
            ]);
        }

        // Verificar si el usuario tiene tokens activos (sesiones previas)
        $existingTokens = $user->tokens()->count();
        
        if ($existingTokens > 0) {
            // Hay sesiones activas, cerrarlas automáticamente
            $user->tokens()->delete();
            
            // Informar al usuario
            session()->flash('info', 'Se cerró tu sesión anterior automáticamente.');
        }

        // Generar nuevo token Sanctum (SIN crear sesión web)
        $token = $user->createToken('admin_token')->plainTextToken;

        // Guardar token en cookie segura (httpOnly)
        return redirect('/admin/productos')
            ->withCookie(cookie('admin_token', $token, 60 * 24 * 7, '/', null, false, true))
            ->with('success', 'Bienvenido al panel de administración.');
    }

    public function logout(Request $request)
    {
        // Revocar TODOS los tokens del usuario (cierra todas las sesiones)
        if (Auth::check()) {
            $user = Auth::user();
            $user->tokens()->delete();
            
            Log::info('Admin logout: Todos los tokens revocados', [
                'user_id' => $user->id,
                'email' => $user->email
            ]);
        }

        Auth::logout();

        // Eliminar cookie del token
        return redirect('/')->withCookie(
            cookie()->forget('admin_token')
        );
    }
}
