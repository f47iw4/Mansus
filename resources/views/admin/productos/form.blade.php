<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700">Nombre *</label>
        <input type="text" name="nombre" value="{{ $producto->nombre ?? '' }}" required 
            class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all">
    </div>

    <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700">Categoría *</label>
        <select name="categoria" required class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all">
            <option value="">-- Selecciona una categoría --</option>
            <option value="Collar" {{ (isset($producto) && $producto->categoria == 'Collar') ? 'selected' : '' }}>Collar</option>
            <option value="Pendientes" {{ (isset($producto) && $producto->categoria == 'Pendientes') ? 'selected' : '' }}>Pendientes</option>
            <option value="Anillo" {{ (isset($producto) && $producto->categoria == 'Anillo') ? 'selected' : '' }}>Anillo</option>
            <option value="Pulsera" {{ (isset($producto) && $producto->categoria == 'Pulsera') ? 'selected' : '' }}>Pulsera</option>
            <option value="Relojes" {{ (isset($producto) && $producto->categoria == 'Relojes') ? 'selected' : '' }}>Relojes</option>
        </select>
    </div>
</div>

<div class="mt-6 space-y-2">
    <label class="text-sm font-medium text-gray-700">Descripción</label>
    <textarea name="descripcion" rows="3" 
        class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none">{{ $producto->descripcion ?? '' }}</textarea>
</div>

<div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700">Precio (€) *</label>
        <input type="number" step="0.01" name="precio" value="{{ $producto->precio ?? '' }}" required 
            class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all">
    </div>

    <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700">Stock *</label>
        <input type="number" name="stock" value="{{ $producto->stock ?? '' }}" required 
            class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all">
    </div>

    <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700">Material</label>
        <select name="material" class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all">
            <option value="">-- Selecciona un material --</option>
            <option value="Plata" {{ (isset($producto) && $producto->material == 'Plata') ? 'selected' : '' }}>Plata</option>
            <option value="Oro" {{ (isset($producto) && $producto->material == 'Oro') ? 'selected' : '' }}>Oro</option>
            <option value="Plata bañada" {{ (isset($producto) && $producto->material == 'Plata bañada') ? 'selected' : '' }}>Plata bañada</option>
            <option value="Otro" {{ (isset($producto) && $producto->material == 'Otro') ? 'selected' : '' }}>Otro</option>
        </select>
    </div>
</div>

<div class="mt-6 space-y-4">
    <label class="text-sm font-medium text-gray-700">Imagen</label>
    <div class="flex items-start gap-6">
        <div class="flex-1">
            <input type="file" name="imagen" accept="image/*" 
                class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
            <p class="mt-1 text-xs text-gray-500">Formatos: JPG, PNG, WebP. Máx 2MB.</p>
        </div>
        
        @if(isset($producto) && $producto->imagen)
            <div class="w-24 h-24 rounded-lg border border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center">
                <img src="{{ asset($producto->imagen) }}" alt="Imagen actual" class="w-full h-full object-cover">
            </div>
        @endif
    </div>
</div>

<div class="mt-6 p-4 bg-gray-50 rounded-lg flex items-center gap-3">
    <input type="hidden" name="activo" value="0">
    <input type="checkbox" name="activo" id="activo" value="1" {{ (isset($producto) && $producto->activo) || !isset($producto) ? 'checked' : '' }}
        class="w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-gray-900">
    <label for="activo" class="text-sm font-medium text-gray-700 cursor-pointer select-none">
        Producto Activo (Visible en tienda)
    </label>
</div>


