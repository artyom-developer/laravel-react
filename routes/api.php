<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('producto/list','API\ControllerProduct@get_all');
// crear producto
Route::post('producto/create','API\ControllerProduct@create');
// Actualizar producto
Route::post('producto/update','API\ControllerProduct@update');
// Eliminar producto
Route::post('producto/delete','API\ControllerProduct@delete');
