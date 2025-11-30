<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\Admin\AdminProductoController;

// RUTA PÚBLICA - Página principal
Route::get('/', function () {
    return view('app');
});

// Rutas públicas para el catálogo de productos (Backend Rendered - si se usan)
Route::get('/productos', [ProductoController::class, 'index'])->name('productos.index');
Route::get('/productos/{producto}', [ProductoController::class, 'show'])->name('productos.show');

// ====================== Rutas ADMIN ======================
Route::prefix('admin')
    ->as('admin.')
    ->group(function () {
        // Dashboard
        Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');
        
        // Productos
        Route::patch('productos/{producto}/toggle', [AdminProductoController::class, 'toggle'])->name('productos.toggle');
        Route::resource('productos', AdminProductoController::class);
        
        // API interna para el dashboard (versionada v1)
        Route::get('api/v1/productos', [AdminProductoController::class, 'apiIndex'])->name('api.productos');
    });

// ====================== SPA Catch-all Route ======================
// Cualquier otra ruta que no sea API o Admin será manejada por React
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');