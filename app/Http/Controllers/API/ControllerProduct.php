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
}
