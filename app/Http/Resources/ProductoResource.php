<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id_producto,
            'id_producto' => $this->id_producto, // For React components
            'nombre' => $this->nombre,
            'descripcion' => $this->descripcion,
            'categoria' => $this->categoria,
            'material' => $this->material,
            'precio' => $this->precio,
            'stock' => $this->stock,
            'activo' => $this->activo,
            'imagen' => $this->imagen ? (
                preg_match('/^(http|data:)/', $this->imagen) 
                    ? $this->imagen 
                    : asset($this->imagen)
            ) : null,
            'ventas' => $this->ventas,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
