<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Producto;

class ControllerProduct extends Controller
{
    //
    public function get_all(){
      return Producto::all();
    }

    // funcion de insertar
    public function create(Request $request){

      // inserta los datos
      Producto::insert([
        'titulo' => $request->input('nombre'),
        'descripcion' => $request->input('descripcion'),
        'precio' => $request->input('precio'),
        'cantidad' => 0
      ]);

      // respesta de JSON
      $response['message'] = "Guardo exitosamente";
      $response['success'] = true;

      return $response;
    }

}
