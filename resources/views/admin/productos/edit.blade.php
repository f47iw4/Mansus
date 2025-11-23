@extends('layouts.app')
<div class="mb-3">
    <form action="{{ route('admin.productos.toggle', $producto) }}" method="POST" style="display:inline">
        @csrf
        @method('PATCH')
        @if($producto->activo)
            <button type="submit" class="btn btn-warning">
                <i class="bi bi-eye-slash"></i> Desactivar Producto
            </button>
        @else
            <button type="submit" class="btn btn-success">
                <i class="bi bi-eye"></i> Activar Producto
            </button>
        @endif
    </form>
</div>

<hr class="my-4">

<button type="submit" class="btn btn-primary">Actualizar</button>
<a href="{{ route('admin.productos.index') }}" class="btn btn-secondary">Cancelar</a>
@section('content')
<h1>Editar Producto</h1>

<form action="{{ route('admin.productos.update', $producto) }}" method="POST">
    @csrf
    @method('PUT')

    <div class="mb-3">
        <label for="nombre" class="form-label">Nombre *</label>
        <input type="text" class="form-control @error('nombre') is-invalid @enderror" id="nombre" name="nombre" value="{{ old('nombre', $producto->nombre) }}" required>
        @error('nombre')
            <div class="invalid-feedback">{{ $message }}</div>
        @enderror
    </div>

    <div class="mb-3">
        <label for="descripcion" class="form-label">Descripción</label>
        <textarea class="form-control @error('descripcion') is-invalid @enderror" id="descripcion" name="descripcion" rows="3">{{ old('descripcion', $producto->descripcion) }}</textarea>
        @error('descripcion')
            <div class="invalid-feedback">{{ $message }}</div>
        @enderror
    </div>

    <div class="mb-3">
        <label for="categoria" class="form-label">Categoría</label>
        <input type="text" class="form-control @error('categoria') is-invalid @enderror" id="categoria" name="categoria" value="{{ old('categoria', $producto->categoria) }}">
        @error('categoria')
            <div class="invalid-feedback">{{ $message }}</div>
        @enderror
    </div>

    <div class="mb-3">
        <label for="material" class="form-label">Material</label>
        <input type="text" class="form-control @error('material') is-invalid @enderror" id="material" name="material" value="{{ old('material', $producto->material) }}">
        @error('material')
            <div class="invalid-feedback">{{ $message }}</div>
        @enderror
    </div>

    <div class="mb-3">
        <label for="precio" class="form-label">Precio *</label>
        <input type="number" step="0.01" class="form-control @error('precio') is-invalid @enderror" id="precio" name="precio" value="{{ old('precio', $producto->precio) }}" required>
        @error('precio')
            <div class="invalid-feedback">{{ $message }}</div>
        @enderror
    </div>

    <div class="mb-3">
        <label for="stock" class="form-label">Stock *</label>
        <input type="number" class="form-control @error('stock') is-invalid @enderror" id="stock" name="stock" value="{{ old('stock', $producto->stock) }}" required>
        @error('stock')
            <div class="invalid-feedback">{{ $message }}</div>
        @enderror
    </div>

    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="activo" name="activo" value="1"{{ old('activo', $producto->activo) ? 'checked' : '' }}>
        <label class="form-check-label" for="activo">Activo</label>
    </div>

    <button type="submit" class="btn btn-primary">Actualizar</button>
    <a href="{{ route('admin.productos.index') }}" class="btn btn-secondary">Cancelar</a>
</form>
@endsection