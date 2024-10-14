<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Role;

class AuthController extends Controller
{
    //
    public function login(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }

        // Crear un token para el usuario
        $token = $user->createToken('API Token')->plainTextToken;
        
        $role = $user->roles()->first(); // Esto devuelve el primer rol asociado
        if ($role) {
            echo $role->name; // Imprimir el nombre del rol
        }
        // si el usuario no es efadmin
        if(!$user ->hasRole('efadmin')){
            return response()->json([
                'user' => $user,
                'token' => $token,
                'role' => null
            ]);
        // si el usuario es efadmin
        }else{
            return response()->json([
                'user' => $user,
                'token' => $token,
                'role' => $role -> name
            ]);
        }

    }

        public function logout(Request $request)
    {
        // Revocar el token
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Cierre de sesión exitoso']);
    }
}
