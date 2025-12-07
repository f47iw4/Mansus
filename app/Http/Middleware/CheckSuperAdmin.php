<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckSuperAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->check() || auth()->user()->email !== 'admin@mansus.com') {
            if ($request->expectsJson()) {
                 return response()->json(['message' => 'Solo el administrador principal puede realizar esta acción.'], 403);
            }
            abort(403, 'Solo el administrador principal puede acceder a esta sección.');
        }

        return $next($request);
    }
}
