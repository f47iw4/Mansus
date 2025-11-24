<?php

use App\Http\Controllers\Admin\AdminDashboardController;
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
// ====================== Rutas ADMIN ======================
Route::prefix('admin')
    // ->middleware(['auth','is_admin']) // protección futura
    ->as('admin.')
    ->group(function () {
        // Dashboard
        Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');
        
        // Productos
        Route::patch('productos/{producto}/toggle', [AdminProductoController::class, 'toggle'])->name('productos.toggle');
        Route::resource('productos', AdminProductoController::class);
        
        // API interna para el dashboard (versionada v1)
        Route::get('api/v1/productos', [AdminProductoController::class, 'apiIndex'])->name('api.productos');
        
        // Clientes
        Route::get('clientes', function() {
            return 'Gestión de clientes - próximamente';
        })->name('clientes.index');
        
        Route::get('clientes/create', function() {
            return 'Crear cliente - próximamente';
        })->name('clientes.create');
        
        // Estado del servidor
        Route::get('servidor', function() {
            return 'Estado del servidor - próximamente';
        })->name('servidor');
    });

// ====================== Test / ejemplo ======================