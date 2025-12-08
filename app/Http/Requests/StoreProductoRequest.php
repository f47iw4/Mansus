<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required|string|max:255',
            'descripcion' => 'nullable|string',
            'categoria' => 'nullable|string',
            'material' => 'nullable|string',
            'precio' => 'required|numeric|gt:0',
            'stock' => 'required|integer|gt:0',
            'activo' => 'boolean',
            'imagen' => 'nullable|image|max:2048',
        ];
    }

    public function messages(): array
    {
        return [
            'precio.gt' => 'El precio debe ser mayor que 0.',
            'stock.gt' => 'El stock debe ser mayor que 0.',
        ];
    }
}
