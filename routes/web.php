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
Route::prefix('admin')
    // ->middleware(['auth','is_admin']) // protección futura
    ->as('admin.') // esto agrega "admin." al nombre de todas las rutas dentro del grupo
    ->group(function () {
        // Ruta para toggle (debe ir ANTES del resource para evitar conflictos)
        Route::patch('productos/{producto}/toggle', [AdminProductoController::class, 'toggle'])->name('productos.toggle');
        
        // Resource routes
        Route::resource('productos', AdminProductoController::class);
        
        // Ruta API dentro del grupo admin
        Route::get('api/productos', [AdminProductoController::class, 'apiIndex'])->name('api.productos');
    });

    Route::prefix('admin')
    // ->middleware(['auth','is_admin']) // protección futura
    ->as('admin.')
    ->group(function () {
        // Dashboard
        Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');
        
        // Productos
        Route::patch('productos/{producto}/toggle', [AdminProductoController::class, 'toggle'])->name('productos.toggle');
        Route::resource('productos', AdminProductoController::class);
        Route::get('api/productos', [AdminProductoController::class, 'apiIndex'])->name('api.productos');
        
        // Clientes (las crearemos después)
        Route::get('clientes', function() {
            return 'Gestión de clientes - próximamente';
        })->name('clientes.index');
        
        Route::get('clientes/create', function() {
            return 'Crear cliente - próximamente';
        })->name('clientes.create');
        
        // Estado del servidor (lo crearemos después)
        Route::get('servidor', function() {
            return 'Estado del servidor - próximamente';
        })->name('servidor');
    });

// ====================== Test / ejemplo ======================