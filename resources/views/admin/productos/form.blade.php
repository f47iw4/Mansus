<div class="mb-2">
    <label>Nombre</label>
    <input type="text" name="nombre" class="form-control" value="{{ $producto->nombre ?? '' }}" required>
</div>

<div class="mb-2">
    <label>Descripción</label>
    <textarea name="descripcion" class="form-control">{{ $producto->descripcion ?? '' }}</textarea>
</div>

<div class="mb-2">
    <label>Imagen</label>
    <input type="file" name="imagen" class="form-control" accept="image/*">
    @if(isset($producto) && $producto->imagen)
        <div class="mt-2">
            <img src="{{ asset($producto->imagen) }}" alt="Imagen actual" style="max-height: 100px;">
        </div>
    @endif
</div>

<div class="mb-2">
    <label>Categoría</label>
    <select name="categoria" class="form-control">
        <option value="">-- Selecciona una categoría --</option>
        <option value="Collar" {{ (isset($producto) && $producto->categoria == 'Collar') ? 'selected' : '' }}>Collar</option>
        <option value="Pendientes" {{ (isset($producto) && $producto->categoria == 'Pendientes') ? 'selected' : '' }}>Pendientes</option>
        <option value="Anillo" {{ (isset($producto) && $producto->categoria == 'Anillo') ? 'selected' : '' }}>Anillo</option>
        <option value="Pulsera" {{ (isset($producto) && $producto->categoria == 'Pulsera') ? 'selected' : '' }}>Pulsera</option>
    </select>
</div>

<div class="mb-2">
    <label>Material</label>
    <select name="material" class="form-control">
        <option value="">-- Selecciona un material --</option>
        <option value="Plata" {{ (isset($producto) && $producto->material == 'Plata') ? 'selected' : '' }}>Plata</option>
        <option value="Oro" {{ (isset($producto) && $producto->material == 'Oro') ? 'selected' : '' }}>Oro</option>
        <option value="Plata bañada" {{ (isset($producto) && $producto->material == 'Plata bañada') ? 'selected' : '' }}>Plata bañada</option>
        <option value="Otro" {{ (isset($producto) && $producto->material == 'Otro') ? 'selected' : '' }}>Otro</option>
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

<div class="mb-2">
    <label>Imagen</label>
    <input type="file" name="imagen" class="form-control">
    @if(isset($producto) && $producto->imagen)
        <small>Imagen actual: {{ $producto->imagen }}</small>
    @endif
</div>
