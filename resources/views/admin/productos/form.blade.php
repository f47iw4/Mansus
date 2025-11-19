<div class="mb-2">
    <label>Nombre</label>
    <input type="text" name="nombre" class="form-control" value="{{ $producto->nombre ?? '' }}" required>
</div>

<div class="mb-2">
    <label>Descripción</label>
    <textarea name="descripcion" class="form-control">{{ $producto->descripcion ?? '' }}</textarea>
</div>

<div class="mb-2">
    <label>Categoría</label>
    <input type="text" name="categoria" class="form-control" value="{{ $producto->categoria ?? '' }}">
</div>

<div class="mb-2">
    <label>Material</label>
    <input type="text" name="material" class="form-control" value="{{ $producto->material ?? '' }}">
</div>

<div class="mb-2">
    <label>Precio</label>
    <input type="number" step="0.01" name="precio" class="form-control" value="{{ $producto->precio ?? '' }}" required>
</div>

<div class="mb-2">
    <label>Stock</label>
    <input type="number" name="stock" class="form-control" value="{{ $producto->stock ?? '' }}" required>
</div>

<div class="mb-2">
    <label>Activo</label>
    <select name="activo" class="form-control">
        <option value="1" {{ isset($producto) && $producto->activo ? 'selected' : '' }}>Sí</option>
        <option value="0" {{ isset($producto) && !$producto->activo ? 'selected' : '' }}>No</option>
    </select>
</div>
