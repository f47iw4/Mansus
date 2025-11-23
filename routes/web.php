<?php

use App\Http\Controllers\Admin\AdminProductoController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;

Route::get('/', function () {
    return view('app');
});

// Rutas PÚBLICAS para el catálogo de productos.
// Estas rutas son accesibles por cualquier usuario (no requiere login).
Route::get('/productos', [ProductoController::class, 'index'])->name('productos.index');
Route::get('/productos/{producto}', [ProductoController::class, 'show'])->name('productos.show');

/*
====================== (admin) Producto Controller: =========================
- Esto crea las rutas para el crud de productos (/admin/productos)
- El controller se encuentra en App\Http\Controllers\Admin\aProductoController
- El modelo se encuentra en App\Models\Product
----------------------- Resultados esperados: -----------------------
- GET  /admin/productos -> index
- GET  /admin/productos/create -> create
- POST /admin/productos -> store
- GET  /admin/productos/{producto} -> show
- GET  /admin/productos/{producto}/edit -> edit
- PUT  /admin/productos/{producto} -> update
- DELETE /admin/productos/{producto} -> destroy
*/
Route::prefix('admin')->group(function () {
    Route::resource('productos', AdminProductoController::class);
});









/*
====================== Testear la facade de admin: =========================
*/
Route::get('/create', function () {
    return view('admin.productos.create');
});
/*
Route::get('/create', function () {
    return 'FUNCIONA';
}); 
*/

