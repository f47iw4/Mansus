<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\aProductoController;

Route::get('/', function () {
    return view('welcome');
});

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
    Route::resource('productos', aProductoController::class);
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

