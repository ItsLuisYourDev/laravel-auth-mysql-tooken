<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class categorias extends Model
{
    // Especificar el nombre de la tabla si no sigue el plural estándar
    protected $table = 'categorias';

    // Definir los campos que pueden ser asignados en masa (mass assignable)
    protected $fillable = ['nombre'];
}
