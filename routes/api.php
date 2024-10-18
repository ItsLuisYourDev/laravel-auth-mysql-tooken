<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', 'Api\UserController@index')->name('user.index');
Route::get('/ef/','TestController@index');

Route::post('/ef/login', 'api\AuthController@login');
Route::middleware('auth:sanctum')->group(function () {
    Route::post('ef/panel', 'EduFinancieraController@index')->name('ef.panel');
    Route::post('/ef/categorias', 'api\AuthController@logout');
    Route::post('/ef/contenidos', 'api\AuthController@logout');
    Route::post('/ef/logout', 'api\AuthController@logout');
    Route::post('/ef/cadd','api\efCategoriaController@store');
});
Route::get('/ef/test','api\eduFinanciera\TestController@index');
Route::get('/ef/c','api\efCategoriaController@index');
echo("test");

