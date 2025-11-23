<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Producto;
use Illuminate\Http\Request;

//AdminProductoController: Controller para la parte privada (CRUD admin)
class AdminProductoController extends Controller
{


public function apiIndex() {
    return Producto::orderBy('id', 'DESC')->paginate(25);
    }


    /**
     * Display a listing of the resource.
     */
public function index()
{
    $productos = Producto::orderBy('id', 'desc')->paginate(25);
    return view('admin.productos.index', compact('productos'));
}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.productos.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre' => 'required',
            'descripcion' => 'nullable',
            'categoria' => 'nullable',
            'material' => 'nullable',
            'precio' => 'required|numeric',
            'stock' => 'required|integer',
            'activo' => 'boolean',
        ]);

        Producto::create($data);

        return redirect()->route('admin.productos.index')->with('success', 'Producto creado exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Producto $producto)
    {
        return view('admin.productos.show', compact('producto'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Producto $producto)
    {
        return view('admin.productos.edit', compact('producto'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Producto $producto)
    {
        $data = $request->validate([
            'nombre' => 'required',
            'descripcion' => 'nullable',
            'categoria' => 'nullable',
            'material' => 'nullable',
            'precio' => 'required|numeric',
            'stock' => 'required|integer',
            'activo' => 'boolean',
        ]);
        
        $producto->update($data);
        
        return redirect()->route('admin.productos.index')->with('success', 'Producto actualizado exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto)
    {
        $producto->delete();
        return redirect()->route('admin.productos.index')->with('success', 'Producto eliminado.');
    }
}