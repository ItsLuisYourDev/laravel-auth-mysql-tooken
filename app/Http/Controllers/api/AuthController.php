<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Credenciales inválidas',
                'success' => true,
            ], 401);
        }

            // Crear el token (sin usar plainTextToken aún)
    $tokenResult = $user->createToken('API Token');

    // Obtener el token plano (para enviar al cliente)
    $plainTextToken = $tokenResult->plainTextToken;

    // Buscar el token en la tabla 'personal_access_tokens' usando el ID del token recién creado
    $token = PersonalAccessToken::findToken($plainTextToken);

    // Verificar que el token fue encontrado
    if ($token) {
        // Establecer la fecha de expiración manualmente
        $token->forceFill([
            'expires_at' => Carbon::now()->addMinutes(15)  // Cambiar a la expiración que desees
        ])->save();
    }

        // // Crear un token para el usuario
        // $tokenResult = $user->createToken('API Token')->plainTextToken;
        // $token = $user->currentAccessToken();
        // echo($user);

        $role = $user->roles()->first(); // Esto devuelve el primer rol asociado
        if ($role) {
            // echo $role->name; // Imprimir el nombre del rol
        }
        // si el usuario no es efadmin
        if (!$user->hasRole('efadmin')) {
            return response()->json([
                'success' => false,
                'user' => $user,
                'token' => $plainTextToken,
                'role' => null,
            ]);
        } else {
            return response()->json([
                'success' => true,
                'user' => $user,
                'token' => $plainTextToken,
                'role' => $role->name,
            ], 200);
        }

    }

    public function logout(Request $request)
    {
        // Revocar el token
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Cierre de sesión exitoso']);
    }

    public function getUser(Request $request)
    {
        $user = Auth::user();
        $role = $user->roles()->first(); // Esto devuelve el primer rol asociado
        if (!$role) {
            $role = null;
        }
        return response()->json([
            'success' => true,
            'message' => 'Usuario encontrado',
            'data' => $user,
            'role' => $role->name,
        ], 200);
    }
}
