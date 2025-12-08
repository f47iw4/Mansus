<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

// Controller para la parte pública de la aplicación,
// no confundir con AdminProductoController (admin) para la parte privada (CRUD admin)
// Este controlador maneja la parte publica de la tienda.
// Permite a los visitantes ver el listado de productos y sus detalles
// No requiere autenticación (a diferencia de Admin\aProductoController)
class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    /**
     * muestra al cliente sólo los productos activos
     */
    public function index()
    {
        $productos = Producto::where('activo', true)
                            ->orderBy('id_producto', 'desc')
                            ->paginate(25);
        return view('productos.index', compact('productos'));
    }

    public function show(Producto $producto)
    {
        // Verificar que el producto esté activo
        if (!$producto->activo) {
            abort(404);
        }
    
        return view('productos.show', compact('producto'));
    }

    /**
     * API endpoint - Devuelve productos activos como json para el front
     */
    public function apiIndex()
    {
        return Producto::where('activo', true)
                      ->orderBy('id_producto', 'desc')
                      ->paginate(25);
    }
}
