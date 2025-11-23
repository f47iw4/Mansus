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
    ->middleware(['auth', 'is_admin']) // Protege todas las rutas admin
    ->group(function () {
        // CRUD completo con resource
        Route::resource('productos', AdminProductoController::class);
    });

// ====================== Test / ejemplo ======================
// (temporal) para probar vistas de creación 
Route::get('/create', function () {
    return view('admin.productos.create');
});
