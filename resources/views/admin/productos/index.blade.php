@extends('layouts.app')

@section('content')
<h1>Productos</h1>

@if(session('success'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        {{ session('success') }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
@endif

@if(session('error'))
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ session('error') }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
@endif

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
            <td>
                @if($producto->activo)
                    <span class="badge bg-success">Activo</span>
                @else
                    <span class="badge bg-secondary">Inactivo</span>
                @endif
            </td>
            <td>
                <!-- Botón de activar/desactivar rápido -->
                <form action="{{ route('admin.productos.toggle', $producto) }}" method="POST" style="display:inline">
                    @csrf
                    @method('PATCH')
                    @if($producto->activo)
                        <button type="submit" class="btn btn-secondary btn-sm" title="Desactivar">
                            <i class="bi bi-eye-slash"></i> Desactivar
                        </button>
                    @else
                        <button type="submit" class="btn btn-success btn-sm" title="Activar">
                            <i class="bi bi-eye"></i> Activar
                        </button>
                    @endif
                </form>

                <a href="{{ route('admin.productos.edit', $producto) }}" class="btn btn-warning btn-sm">Editar</a>

                <form action="{{ route('admin.productos.destroy', $producto) }}" method="POST" style="display:inline">
                    @csrf
                    @method('DELETE')
                    <button onclick="return confirm('¿Eliminar producto?')" class="btn btn-danger btn-sm">Borrar</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

{{ $productos->links() }}
@endsection