<div class="mb-2">
    <label>Nombre</label>
    <input type="text" name="nombre" class="form-control" value="{{ $producto->nombre ?? '' }}" required>
</div>

<div class="mb-2">
    <label>Descripción</label>
    <textarea name="descripcion" class="form-control">{{ $producto->descripcion ?? '' }}</textarea>
</div>

<div>
    <label>Categoría</label>
    <select name="categoria" class="form-control">
        <option value="">-- Selecciona una categoría --</option>
        <option value="Collar">Collar</option>
        <option value="Pendientes">Pendientes</option>
        <option value="Anillo">Anillo</option>
        <option value="Pulsera">Pulsera</option>
    </select>
</div>


<div>
    <label>Material</label>
    <select name="material" class="form-control">
        <option value="">-- Selecciona un material --</option>
        <option value="Plata">Plata</option>
        <option value="Oro">Oro</option>
        <option value="Plata bañada">Plata bañada</option>
        <option value="Otro">Otro</option>
    </select>
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
