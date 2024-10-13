<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    //
    protected $table = 'role';
    protected $primaryKey = 'id_role'; // Asegúrate de que sea la clave correcta

    protected $fillable = [
        'name', 'description',
    ];

    // Relación con el modelo User
    public function users()
    {
        return $this->belongsToMany(User::class, 'role_user', 'role_id', 'user_id');
    }
}
