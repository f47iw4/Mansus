<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminProductoController;
use App\Http\Controllers\Admin\AdminLoginController;

// ======================================================
// Rutas PÚBLICAS (React gestiona el front)
// ======================================================

// Página principal
Route::view('/', 'app');

// Vista login usuario (SPA)
Route::view('/login', 'app')->name('login');

// Catálogo público
Route::get('/productos', [ProductoController::class, 'index'])->name('productos.index');
Route::get('/productos/{producto}', [ProductoController::class, 'show'])->name('productos.show');

// ======================================================
// Rutas ADMIN
// ======================================================

// Login administrador (Blade)
Route::get('/admin/login', [AdminLoginController::class, 'showLoginForm'])->name('admin.login');
Route::post('/admin/login', [AdminLoginController::class, 'login'])->name('admin.login.post');
Route::post('/admin/logout-web', [AdminLoginController::class, 'logout'])->name('admin.logout.web');

// Panel admin (protegido)
Route::prefix('admin')
    ->as('admin.')
    ->middleware(['auth', 'is_admin'])
    ->group(function () {

        // Dashboard (Admin + Supervisor)
        Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');

        // Productos CRUD (solo Super Admin)
        Route::middleware('super_admin')->group(function () {
            Route::patch('productos/{producto}/toggle', [AdminProductoController::class, 'toggle'])
                ->name('productos.toggle');

            Route::resource('productos', AdminProductoController::class);
        });

        // Clientes (placeholder)
        Route::get('clientes', fn() => 'Gestión de clientes - próximamente')->name('clientes.index');
        Route::get('clientes/create', fn() => 'Crear cliente - próximamente')->name('clientes.create');

        // Estado del servidor (placeholder)
        Route::get('servidor', fn() => 'Estado del servidor - próximamente')->name('servidor');
    });

// ======================================================
// SPA Catch-all (React se encarga de todo lo que no sea admin o API)
// ======================================================

Route::get('/{any}', fn() => view('app'))
    ->where('any', '^(?!admin)(?!api).*$');
