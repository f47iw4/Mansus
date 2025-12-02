@extends('layouts.app')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
        <div class="mb-8 text-center">
            <h1 class="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Editar Producto
            </h1>
            <p class="text-gray-600 mt-2">Actualiza los detalles de {{ $producto->nombre }}</p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div class="p-8">
                <form action="{{ route('admin.productos.update', $producto) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    
                    @include('admin.productos.form')
                    
                    <div class="mt-8 flex items-center justify-end gap-4 border-t border-gray-100 pt-6">
                        <a href="{{ route('admin.productos.index') }}" class="px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-xl transition-colors">
                            Cancelar
                        </a>
                        <button type="submit" class="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-3 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg shadow-gray-900/30 hover:shadow-xl hover:shadow-gray-900/40 flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                            </svg>
                            Actualizar Producto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection