@extends('layouts.app')

@section('content')
<div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-8">
            <div class="flex justify-between items-start mb-6">
                <h1 class="text-3xl font-bold">{{ $producto->nombre }}</h1>
                <span class="text-2xl font-bold text-green-600">${{ number_format($producto->precio, 2) }}</span>
            </div>
            
            <div class="mb-6">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {{ $producto->categoria ?? 'Sin Categoría' }}
                </span>
                @if($producto->material)
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {{ $producto->material }}
                    </span>
                @endif
            </div>

            <div class="prose max-w-none mb-8">
                <h3 class="text-xl font-semibold mb-2">Descripción</h3>
                <p class="text-gray-700">{{ $producto->descripcion }}</p>
            </div>

            <div class="flex justify-between items-center border-t pt-6">
                <a href="{{ route('productos.index') }}" class="text-blue-500 hover:text-blue-700 transition">
                    &larr; Volver al catálogo
                </a>
                <button class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold">
                    Añadir al Carrito
                </button>
            </div>
        </div>
    </div>
</div>
@endsection
