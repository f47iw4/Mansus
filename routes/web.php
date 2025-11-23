<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\Admin\AdminProductoController;

// RUTA PÚBLICA - Página principal
Route::get('/', function () {
    return view('app');
});

// Rutas públicas para el catálogo de productos
Route::get('/productos', [ProductoController::class, 'index'])->name('productos.index');
Route::get('/productos/{producto}', [ProductoController::class, 'show'])->name('productos.show');

// ====================== Rutas ADMIN - ProductoController ======================
// Panel de administración de productos
Route::prefix('admin')
    // ->middleware(['auth','is_admin']) // protección futura
    ->as('admin.') // esto agrega "admin." al nombre de todas las rutas dentro del grupo
    ->group(function () {
        Route::resource('productos', AdminProductoController::class);
        
        // Ruta API dentro del grupo admin
        Route::get('/api/productos', [AdminProductoController::class, 'apiIndex'])->name('api.productos');
    });

// ====================== Test / ejemplo ======================
// (temporal) para probar vistas de creación
Route::get('/create', function () {
    return view('admin.productos.create');
});