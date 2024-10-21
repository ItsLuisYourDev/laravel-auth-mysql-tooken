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
          // Si el usuario está autenticado
        if (Auth::user()) {
            // Obtén el token actual
            $token = Auth::user()->currentAccessToken();

            // Si hay un token, verificamos si ha expirado
            if ($token) {
                $expiresAt = Carbon::parse($token->expires_at);

                // Si el token ya ha expirado, lo eliminamos
                if ($expiresAt->isPast()) {
                    $token->delete();
                    return response()->json([
                        'success' => false,
                        'message' => 'Token ha expirado, por favor inicie sesión nuevamente'
                    ], 401);
                }

                // Si el token aún es válido, extendemos su expiración
                $token->forceFill([
                    'expires_at' => Carbon::now()->addMinutes(5)
                ])->save();
            }
        }
        return $next($request);

    }
}
