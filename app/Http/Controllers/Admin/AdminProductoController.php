<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Producto;
use Illuminate\Http\Request;

//aProductoController: Controller para la parte privada (CRUD admin)
class AdminProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productos = Producto::orderBy('id', 'DESC')->paginate(10);

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
    { {
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
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
        return redirect()->route('productos.index')->with('success', 'Producto actualizado exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto)
    {
        $producto->delete();
        return redirect()->route('productos.index')->with('success', 'Producto eliminado.');
    }
}
