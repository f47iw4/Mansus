<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Nombre -->
    <div class="space-y-2 group">
        <label class="text-sm font-semibold text-gray-700 flex items-center gap-2">
            Nombre del Producto <span class="text-red-500">*</span>
        </label>
        <div class="relative">
            <input type="text" name="nombre" value="{{ $producto->nombre ?? '' }}" required 
                class="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all group-hover:bg-white"
                placeholder="Ej: Collar de Plata">
        </div>
    </div>

    <!-- Categoría -->
    <div class="space-y-2 group">
        <label class="text-sm font-semibold text-gray-700 flex items-center gap-2">
            Categoría <span class="text-red-500">*</span>
        </label>
        <div class="relative">
            <select name="categoria" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all appearance-none group-hover:bg-white">
                <option value="">Selecciona una categoría</option>
                <option value="Collar" {{ (isset($producto) && $producto->categoria == 'Collar') ? 'selected' : '' }}>Collar</option>
                <option value="Pendientes" {{ (isset($producto) && $producto->categoria == 'Pendientes') ? 'selected' : '' }}>Pendientes</option>
                <option value="Anillo" {{ (isset($producto) && $producto->categoria == 'Anillo') ? 'selected' : '' }}>Anillo</option>
                <option value="Pulsera" {{ (isset($producto) && $producto->categoria == 'Pulsera') ? 'selected' : '' }}>Pulsera</option>
                <option value="Relojes" {{ (isset($producto) && $producto->categoria == 'Relojes') ? 'selected' : '' }}>Relojes</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
        </div>
    </div>
</div>

<!-- Descripción -->
<div class="mt-8 space-y-2 group">
    <label class="text-sm font-semibold text-gray-700">Descripción</label>
    <textarea name="descripcion" rows="4" 
        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none group-hover:bg-white"
        placeholder="Describe los detalles del producto...">{{ $producto->descripcion ?? '' }}</textarea>
</div>

<div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- Precio -->
    <div class="space-y-2 group">
        <label class="text-sm font-semibold text-gray-700 flex items-center gap-2">
            Precio <span class="text-red-500">*</span>
        </label>
        <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 font-medium">€</span>
            <input type="number" step="0.01" name="precio" value="{{ $producto->precio ?? '' }}" required 
                class="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all group-hover:bg-white"
                placeholder="0.00">
        </div>
    </div>

    <!-- Stock -->
    <div class="space-y-2 group">
        <label class="text-sm font-semibold text-gray-700 flex items-center gap-2">
            Stock <span class="text-red-500">*</span>
        </label>
        <input type="number" name="stock" value="{{ $producto->stock ?? '' }}" required 
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all group-hover:bg-white"
            placeholder="0">
    </div>

    <!-- Material -->
    <div class="space-y-2 group">
        <label class="text-sm font-semibold text-gray-700">Material</label>
        <div class="relative">
            <select name="material" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all appearance-none group-hover:bg-white">
                <option value="">Selecciona material</option>
                <option value="Plata" {{ (isset($producto) && $producto->material == 'Plata') ? 'selected' : '' }}>Plata</option>
                <option value="Oro" {{ (isset($producto) && $producto->material == 'Oro') ? 'selected' : '' }}>Oro</option>
                <option value="Plata bañada" {{ (isset($producto) && $producto->material == 'Plata bañada') ? 'selected' : '' }}>Plata bañada</option>
                <option value="Otro" {{ (isset($producto) && $producto->material == 'Otro') ? 'selected' : '' }}>Otro</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
        </div>
    </div>
</div>

<!-- Imagen -->
<div class="mt-8 p-6 border-2 border-dashed border-gray-200 rounded-2xl hover:border-gray-400 transition-colors bg-gray-50/50">
    <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1 text-center md:text-left">
            <label class="text-sm font-semibold text-gray-700 mb-2 block">Imagen del Producto</label>
            <p class="text-xs text-gray-500 mb-4">Sube una imagen de alta calidad. Formatos: JPG, PNG, WebP.</p>
            <input type="file" name="imagen" accept="image/*" 
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-900 file:text-white hover:file:bg-gray-800 transition-all cursor-pointer">
        </div>
        
        @if(isset($producto) && $producto->imagen)
            <div class="relative w-32 h-32 rounded-xl border border-gray-200 overflow-hidden shadow-sm group">
                <img src="{{ asset($producto->imagen) }}" alt="Imagen actual" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-white text-xs font-medium">Actual</span>
                </div>
            </div>
        @endif
    </div>
</div>

<!-- Activo Checkbox -->
<div class="mt-8 flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
    <div class="flex items-center gap-3">
        <div class="relative flex items-center">
            <input type="hidden" name="activo" value="0">
            <input type="checkbox" name="activo" id="activo" value="1" {{ (isset($producto) && $producto->activo) || !isset($producto) ? 'checked' : '' }}
                class="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white checked:border-green-500 checked:bg-green-500 transition-all">
            <svg class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
        </div>
        <label for="activo" class="text-sm font-medium text-gray-700 cursor-pointer select-none">
            Producto Activo
            <span class="block text-xs text-gray-500 font-normal">El producto será visible en la tienda inmediatamente</span>
        </label>
    </div>
    <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-700">Visible</span>
</div>
