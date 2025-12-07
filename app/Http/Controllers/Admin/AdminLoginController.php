<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

        // Intentar autenticación
        if (!Auth::attempt($credentials)) {
            return back()->withErrors([
                'email' => 'Las credenciales no coinciden con nuestros registros.',
            ]);
        }

        $user = Auth::user();

        // Verificar que sea admin
        if ($user->role !== 'admin') {
            Auth::logout();
            return back()->withErrors([
                'email' => 'No tienes permisos de administrador.',
            ]);
        }

        // Revocar todos los tokens existentes del usuario (cierra otras sesiones)
        $user->tokens()->delete();

        // Generar nuevo token Sanctum
        $token = $user->createToken('admin_token')->plainTextToken;

        // Guardar token en cookie segura (httpOnly)
        return redirect('/admin/productos')->withCookie(
            cookie('admin_token', $token, 60 * 24 * 7, '/', null, true, true) // 7 días, httpOnly, secure
        );
    }

    public function logout(Request $request)
    {
        // Revocar el token actual
        if (Auth::check()) {
            Auth::user()->currentAccessToken()?->delete();
        }

        Auth::logout();

        // Eliminar cookie del token
        return redirect('/')->withCookie(
            cookie()->forget('admin_token')
        );
    }
}
