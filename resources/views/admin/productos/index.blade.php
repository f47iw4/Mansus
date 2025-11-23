@extends('layouts.app')

@section('content')
<div class="container mt-5">

    <h1 class="mb-4">Productos</h1>

    <a href="{{ route('admin.productos.create') }}" class="btn btn-primary mb-3">
        Crear producto
    </a>

    <table class="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Activo</th>
                <th>Acciones</th>
            </tr>
        </thead>

        <tbody>
            @foreach ($productos as $producto)
            <tr>
                <td>{{ $producto->id }}</td>
                <td>{{ $producto->nombre }}</td>
                <td>{{ $producto->categoria }}</td>
                <td>{{ $producto->precio }} €</td>
                <td>{{ $producto->stock }}</td>
                <td>{{ $producto->activo ? 'Sí' : 'No' }}</td>

                <td>
                    <a href="{{ route('admin.productos.edit', $producto) }}" class="btn btn-warning btn-sm">
                        Editar
                    </a>

                    <form action="{{ route('admin.productos.destroy', $producto) }}" method="POST" class="d-inline">
                        @csrf
                        @method('DELETE')

                        <button class="btn btn-danger btn-sm" onclick="return confirm('¿Eliminar producto?')">
                            Eliminar
                        </button>
                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

    {{ $productos->links() }}

</div>
@endsection
