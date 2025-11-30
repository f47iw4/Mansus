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
    $productos = Producto::orderBy('id_producto', 'DESC')->paginate(25);
    return ProductoResource::collection($productos);
    }


    /**
     * Display a listing of the resource.
     */
public function index()
{
    $productos = Producto::orderBy('id_producto', 'desc')->paginate(25);
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

        if ($request->hasFile('imagen')) {
            $file = $request->file('imagen');
            $path = $file->getRealPath();
            $image = file_get_contents($path);
            $base64 = base64_encode($image);
            $data['imagen'] = 'data:' . $file->getClientMimeType() . ';base64,' . $base64;
        }

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

        if ($request->hasFile('imagen')) {
            $file = $request->file('imagen');
            $path = $file->getRealPath();
            $image = file_get_contents($path);
            $base64 = base64_encode($image);
            $data['imagen'] = 'data:' . $file->getClientMimeType() . ';base64,' . $base64;
        }

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

    /**
     * API: Store a newly created product and return JSON
     */
    public function apiStore(StoreProductoRequest $request)
    {
        $data = $request->validated();
        
        if ($request->hasFile('imagen')) {
            $file = $request->file('imagen');
            $path = $file->getRealPath();
            $image = file_get_contents($path);
            $base64 = base64_encode($image);
            $data['imagen'] = 'data:' . $file->getClientMimeType() . ';base64,' . $base64;
        }

        $producto = Producto::create($data);
        
        return response()->json([
            'success' => true,
            'message' => 'Producto creado exitosamente.',
            'data' => new ProductoResource($producto)
        ], 201);
    }

    /**
     * API: Update the specified product and return JSON
     */
    public function apiUpdate(UpdateProductoRequest $request, Producto $producto)
    {
        $data = $request->validated();

        if ($request->hasFile('imagen')) {
            $file = $request->file('imagen');
            $path = $file->getRealPath();
            $image = file_get_contents($path);
            $base64 = base64_encode($image);
            $data['imagen'] = 'data:' . $file->getClientMimeType() . ';base64,' . $base64;
        }

        $producto->update($data);
        
        return response()->json([
            'success' => true,
            'message' => 'Producto actualizado exitosamente.',
            'data' => new ProductoResource($producto)
        ], 200);
    }

    /**
     * API: Delete the specified product and return JSON
     */
    public function apiDestroy(Producto $producto)
    {
        try {
            $producto->delete();
            return response()->json([
                'success' => true,
                'message' => 'Producto eliminado exitosamente.'
            ], 200);
        } catch (\Exception $e) {
            \Log::error('Error deleting product: '.$e->getMessage(), ['id' => $producto->id]);
            return response()->json([
                'success' => false,
                'message' => 'No se pudo eliminar el producto.'
            ], 500);
        }
    }
    
    
    /* Si falla el try-catch, descomentar este (y seguir probando)
    public function destroy(Producto $producto)
    {
        $producto->delete();
        return redirect()->route('admin.productos.index')->with('success', 'Producto eliminado.');
    }
        */
}