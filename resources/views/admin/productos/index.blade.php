@extends('layouts.app')

@section('content')
<h1>Productos</h1>

<a href="{{ route('admin.productos.create') }}" class="btn btn-primary mb-3">Nuevo producto</a>

<table class="table">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Material</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Activo</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        @foreach($productos as $producto)
        <tr>
            <td>{{ $producto->nombre }}</td>
            <td>{{ $producto->categoria }}</td>
            <td>{{ $producto->material }}</td>
            <td>{{ $producto->precio }} €</td>
            <td>{{ $producto->stock }}</td>
            <td>{{ $producto->activo ? 'Sí' : 'No' }}</td>
            <td>
                <a href="{{ route('productos.edit', $producto) }}" class="btn btn-warning btn-sm">Editar</a>
                <form action="{{ route('productos.destroy', $producto) }}" method="POST" style="display:inline">
                    @csrf
                    @method('DELETE')
                    <button onclick="return confirm('¿Eliminar producto?')" class="btn btn-danger btn-sm">Borrar</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
