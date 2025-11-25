<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Producto;
use App\Http\Resources\ProductoResource;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// API pública para el frontend - Productos activos
Route::get('/productos', function () {
    $productos = Producto::where('activo', true)
        ->orderBy('id_producto', 'desc')
        ->get();
    return ProductoResource::collection($productos);
});

Route::get('/productos/{id}', function ($id) {
    $producto = Producto::where('activo', true)
        ->where('id_producto', $id)
        ->firstOrFail();
    return new ProductoResource($producto);
});
