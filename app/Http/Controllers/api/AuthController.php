<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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

        // Crear un token para el usuario
        $token = $user->createToken('API Token')->plainTextToken;

        $role = $user->roles()->first(); // Esto devuelve el primer rol asociado
        if ($role) {
            // echo $role->name; // Imprimir el nombre del rol
        }
        // si el usuario no es efadmin
        if (!$user->hasRole('efadmin')) {
            return response()->json([
                'success' => false,
                'user' => $user,
                'token' => $token,
                'role' => null,
            ]);
        } else {
            return response()->json([
                'success' => true,
                'user' => $user,
                'token' => $token,
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
