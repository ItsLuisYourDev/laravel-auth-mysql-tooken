<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class ExtendSanctumToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Si el usuario está autenticado
if (Auth::user()) {
    // Obtén el token actual
    $token = Auth::user()->currentAccessToken();

    // Verifica si el token es válido y si hay interacción reciente
    if ($token) {
        // Extiende el token otros 5 minutos
        $token->forceFill([
            'expires_at' => Carbon::now()->addMinutes(5)
        ])->save();
    }
}
        return $next($request);

    }
}
