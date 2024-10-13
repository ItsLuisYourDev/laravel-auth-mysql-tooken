<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;

class EduFinancieraController extends Controller
{
    //
    public function index(){
        echo('eres admin');
        $rol = Role::find(1);
        echo($rol);
    }
}
