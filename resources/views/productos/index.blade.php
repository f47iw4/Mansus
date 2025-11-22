@extends('layouts.app')

@section('content')
<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Nuestros Productos</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        @foreach($productos as $producto)
            <div class="border rounded-lg shadow-lg overflow-hidden">
                <div class="p-4">
                    <h2 class="text-xl font-semibold mb-2">{{ $producto->nombre }}</h2>
                    <p class="text-gray-600 mb-4">{{ Str::limit($producto->descripcion, 100) }}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-lg font-bold text-green-600">${{ number_format($producto->precio, 2) }}</span>
                        <a href="{{ route('productos.show', $producto) }}" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Ver Detalles</a>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</div>
@endsection
