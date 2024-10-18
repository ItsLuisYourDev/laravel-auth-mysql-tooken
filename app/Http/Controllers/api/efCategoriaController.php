<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\categorias;
use Response;

class efCategoriaController extends Controller
{
    //
    public function index(){
        $categoria = categorias::find(1);
         // Verificar si la categoría existe
        if ($categoria) {
            // Si existe, retorna los datos junto con un mensaje
            return response()->json([
                'success' => true,
                'message' => 'Categoría encontrada',
                'data' => $categoria
            ], 200);
        } else {
            // Si no existe, retorna un mensaje de error
            return response()->json([
                'success' => false,
                'message' => 'Categoría no encontrada'
            ], 404);
        }
    }
    
        // Método para agregar una nueva categoría
    public function store(Request $request)
    {
        // Validar los datos de entrada
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255'
        ]);
        // Intentar crear la categoría
        try {
            // Crear la categoría con los datos validados
            $categoria = categorias::create([
                'nombre' => $validatedData['nombre'],
            ]);
            // Retornar respuesta de éxito
            return response()->json([
                'success' => true,
                'message' => 'Categoría creada con éxito',
                'data' => $categoria
            ], 201);

                } catch (\Exception $e) {
            // Capturar cualquier error y retornar respuesta de error
            return response()->json([
                'success' => false,
                'message' => 'Ocurrió un error al crear la categoría',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}