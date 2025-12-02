<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\Admin\AdminProductoController;

// RUTA PÚBLICA - Página principal
Route::get('/', function () {
    return view('app');
});

Route::get('/login', function () {
    return view('app');
})->name('login');

// Traditional Admin Login (for Blade CRUD access)
Route::get('/admin/login', [App\Http\Controllers\Admin\AdminLoginController::class, 'showLoginForm'])->name('admin.login');
Route::post('/admin/login', [App\Http\Controllers\Admin\AdminLoginController::class, 'login'])->name('admin.login.post');
Route::post('/admin/logout-web', [App\Http\Controllers\Admin\AdminLoginController::class, 'logout'])->name('admin.logout.web');

// Rutas públicas para el catálogo de productos (Backend Rendered - si se usan)
Route::get('/productos', [ProductoController::class, 'index'])->name('productos.index');
Route::get('/productos/{producto}', [ProductoController::class, 'show'])->name('productos.show');

// ====================== Rutas ADMIN ======================
Route::prefix('admin')
    ->as('admin.')
    ->middleware(['auth', 'is_admin']) // Protect all admin routes
    ->group(function () {
        // Dashboard
        Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');
        
        // Productos
        Route::patch('productos/{producto}/toggle', [AdminProductoController::class, 'toggle'])->name('productos.toggle');
        Route::resource('productos', AdminProductoController::class);
        
        // API interna para el dashboard (versionada v1)
        Route::get('api/v1/productos', [AdminProductoController::class, 'apiIndex'])->name('api.productos');

        // Clientes (placeholder)
        Route::get('clientes', function() {
            return 'Gestión de clientes - próximamente';
        })->name('clientes.index');
        
        Route::get('clientes/create', function() {
            return 'Crear cliente - próximamente';
        })->name('clientes.create');
        
        // Estado del servidor (placeholder)
        Route::get('servidor', function() {
            return 'Estado del servidor - próximamente';
        })->name('servidor');
    });

// ====================== SPA Catch-all Route ======================
// Cualquier otra ruta que no sea API o Admin será manejada por React
Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!admin).*$');