<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;

class AuthenticateWithCookie
{
    /**
     * Handle an incoming request.
     * 
     * This middleware reads the Sanctum token from a cookie and authenticates the user.
     * This allows Blade views to work with token-based authentication.
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Intentar obtener el token de la cookie
        $token = $request->cookie('admin_token');

        if ($token) {
            // Buscar el token en la base de datos
            $accessToken = PersonalAccessToken::findToken($token);

            if ($accessToken) {
                // Autenticar al usuario usando el token
                Auth::login($accessToken->tokenable);
                
                Log::info('AuthenticateWithCookie: Usuario autenticado', [
                    'user_id' => $accessToken->tokenable->id,
                    'email' => $accessToken->tokenable->email,
                    'role' => $accessToken->tokenable->role,
                    'url' => $request->fullUrl()
                ]);
            }
        }

        // Si no está autenticado después de intentar con la cookie, redirigir a login
        if (!Auth::check()) {
            Log::warning('AuthenticateWithCookie: No autenticado, redirigiendo a login');
            return redirect('/admin/login');
        }

        return $next($request);
    }
}
