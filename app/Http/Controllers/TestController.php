<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;

class TestController extends Controller
{
    //
    public function index(){
        $role = Role::find(1);
        $users = $role->users;
        // echo($role);
        // echo($users);
        $list = [
            'nombre' => 'luis'
        ];
        return response() -> json($list);
    }
}
