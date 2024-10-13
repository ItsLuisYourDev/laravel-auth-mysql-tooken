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
        echo('eres admin');
        // $rol = Role::find(1);
        // echo($rol);
        // Obtener los roles asociados con un usuario
        // $role = Role::find(1); // Reemplaza 1 con el id del rol que quieras probar
        // $users = $role->users;
             // Obtener el usuario autenticado
        $user = Auth::user();
        echo($user);

        // $user = User::find(1); // Reemplaza 1 con el id del usuario que quieras probar
        // $roles = $user->roles;
        // echo($user);
    }
}
