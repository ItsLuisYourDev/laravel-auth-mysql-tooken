<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    //
    public function index(){
        $list = [
            'nombre' => 'luis'
        ];
        return response() -> json($list);
    }
}
