<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;
use App\User;
use Illuminate\Support\Facades\Auth;

class EduFinancieraController extends Controller
{
    //
    public function index(){
        // echo('eres admin');
        // $rol = Role::find(1);
        // echo($rol);
        // Obtener los roles asociados con un usuario
        // $role = Role::find(1); // Reemplaza 1 con el id del rol que quieras probar
        // $users = $role->users;
             // Obtener el usuario autenticado
        // $user = Auth::user();
        // Obtener los roles asociados a este usuario
        // Obtener el primer rol del usuario
        // $role = $user->roles()->first(); // Esto devuelve el primer rol asociado

        // if ($role) {
        //     // echo $role->name; // Imprimir el nombre del rol
        // }
        // if($user ->hasRole('efadmin')){
        //     // echo('el susuairo es adm');
        // }

        // if (Auth::user()->hasRole('efadmin')) {
        //     echo "El usuario es administrador";
        // }

        // $user = User::find(1); // Reemplaza 1 con el id del usuario que quieras probar
        // $roles = $user->roles;
        // echo($user);
        return response()->json([
    'user' => 'luis',
    'token' => 'luis',
    'role' => 'luis'
], 200, ['Content-Type' => 'application/json']);
    }
}
