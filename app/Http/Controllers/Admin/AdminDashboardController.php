<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Producto;
use App\Models\User;
use Illuminate\Support\Facades\DB; // revisar esto 

class AdminDashboardController extends Controller
{
    public function index()
    {
        // Estadísticas de productos
        $totalProductos = Producto::count();
        $productosActivos = Producto::where('activo', true)->count();
        $productosInactivos = Producto::where('activo', false)->count();

        // Estadísticas de clientes
        $totalClientes = User::count();
        
        // Clientes VIP (más de 10 pedidos) - ajustamos con la tabla pedidos
        // Por ahora simulamos con 0
        $clientesVIP = 0; // User::has('pedidos', '>=', 10)->count();
        
        // Clientes registrados en los últimos 7 días
        $clientesRecientes = User::where('created_at', '>=', now()->subDays(7))->count();

        return view('admin.dashboard', compact(
            'totalProductos',
            'productosActivos',
            'productosInactivos',
            'totalClientes',
            'clientesVIP',
            'clientesRecientes'
        ));
    }
}