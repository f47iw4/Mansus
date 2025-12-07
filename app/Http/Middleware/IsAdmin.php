<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Verificar que el usuario esté autenticado
        if (!Auth::check()) {
            Log::warning('IsAdmin middleware: Usuario no autenticado intentó acceder a admin', [
                'ip' => $request->ip(),
                'url' => $request->fullUrl()
            ]);
            return redirect('/admin/login');
        }

        $user = Auth::user();

        // Verificar estrictamente que el rol sea 'admin'
        if ($user->role !== 'admin') {
            Log::warning('IsAdmin middleware: Usuario sin permisos intentó acceder a admin', [
                'user_id' => $user->id,
                'email' => $user->email,
                'role' => $user->role,
                'ip' => $request->ip(),
                'url' => $request->fullUrl()
            ]);
            
            abort(403, 'Acceso denegado. Solo administradores pueden acceder a esta sección.');
        }

        return $next($request);
    }
}
