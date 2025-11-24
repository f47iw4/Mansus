<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Producto;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProductoRequest;
use App\Http\Requests\UpdateProductoRequest;
use App\Http\Resources\ProductoResource;

//AdminProductoController: Controller para la parte privada (CRUD admin)
class AdminProductoController extends Controller
{


public function apiIndex() {
    $productos = Producto::with(['categoria', 'material'])->orderBy('id_producto', 'DESC')->paginate(25);
    return ProductoResource::collection($productos);
    }


    /**
     * Display a listing of the resource.
     */
public function index()
{
    $productos = Producto::with(['categoria', 'material'])->orderBy('id_producto', 'desc')->paginate(25);
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
    public function store(StoreProductoRequest $request)
    {
        $this->authorize('create', Producto::class);
        $data = $request->validated();

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
    public function update(UpdateProductoRequest $request, Producto $producto)
    {
        $this->authorize('update', $producto);
        $data = $request->validated();

        $producto->update($data);

        return redirect()->route('admin.productos.index')->with('success', 'Producto actualizado exitosamente.');
    }

    /** 
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto)
    {
        try {
        $producto->delete();
        return redirect()->route('admin.productos.index')->with('success', 'Producto eliminado exitosamente.');
        } catch (\Exception $e) {
        \Log::error('Error deleting product: '.$e->getMessage(), ['id' => $producto->id]);
        return redirect()->route('admin.productos.index')->with('error', 'No se pudo eliminar el producto.');
        }
    }
    /** 
     * Toggle función rápida para activar/desactivar un producto
     */
    public function toggle(Producto $producto)
    {
        $producto->activo = !$producto->activo;
        $producto->save();
        
        $mensaje = $producto->activo ? 'Producto activado exitosamente.' : 'Producto desactivado exitosamente.';
        
        return redirect()->route('admin.productos.index')->with('success', $mensaje);
    }
    
    
    /* Si falla el try-catch, descomentar este (y seguir probando)
    public function destroy(Producto $producto)
    {
        $producto->delete();
        return redirect()->route('admin.productos.index')->with('success', 'Producto eliminado.');
    }
        */
}