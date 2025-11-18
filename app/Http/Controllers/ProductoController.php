<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

// Controller para la parte pública de la aplicación,
// no confundir con aProductoController (admin) para la parte privada (CRUD admin)
class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Producto $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Producto $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Producto $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $product)
    {
        //
    }
}
