<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

// Controller para la parte pública de la aplicación,
// no confundir con aProductoController (admin) para la parte privada (CRUD admin)
// Este controlador maneja la parte PÚBLICA de la tienda.
// Permite a los visitantes ver el listado de productos y sus detalles.
// No requiere autenticación (a diferencia de Admin\aProductoController).
class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productos = Producto::where('activo', true)->get();
        return view('productos.index', compact('productos'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Producto $producto)
    {
        if (!$producto->activo) {
            abort(404);
        }
        return view('productos.show', compact('producto'));
    }
}
