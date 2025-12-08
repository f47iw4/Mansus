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

// Accesos al CRUD del administrador (Blade)
Route::get('/admin/login', [App\Http\Controllers\Admin\AdminLoginController::class, 'showLoginForm'])->name('admin.login');
Route::post('/admin/login', [App\Http\Controllers\Admin\AdminLoginController::class, 'login'])->name('admin.login.post');
Route::post('/admin/logout-web', [App\Http\Controllers\Admin\AdminLoginController::class, 'logout'])->name('admin.logout.web');

// Rutas públicas para el catálogo de productos 
Route::get('/productos', [ProductoController::class, 'index'])->name('productos.index');
Route::get('/productos/{producto}', [ProductoController::class, 'show'])->name('productos.show');

// ====================== Rutas ADMIN ======================
Route::prefix('admin')
    ->as('admin.')
    ->middleware(['auth', 'is_admin']) // Protege todas las rutas del admin
    ->group(function () {
        // Dashboard (Accesible por ambos roles)
        Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');
        


        // Productos CRUD (SOLO Super Admin)
        Route::middleware(['super_admin'])->group(function () {
            Route::patch('productos/{producto}/toggle', [AdminProductoController::class, 'toggle'])->name('productos.toggle');
            Route::resource('productos', AdminProductoController::class);
        });

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