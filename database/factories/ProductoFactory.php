<?php

namespace Database\Factories;

use App\Models\Producto;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/** @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Producto> */
class ProductoFactory extends Factory
{
    protected $model = Producto::class;

    public function definition()
    {
        return [
            'nombre' => $this->faker->word(),
            'descripcion' => $this->faker->sentence(),
            'categoria' => $this->faker->randomElement(['Rings', 'Necklaces', 'Bracelets']),
            'material' => $this->faker->randomElement(['Gold', 'Silver', 'Platinum']),
            'precio' => $this->faker->randomFloat(2, 50, 5000),
            'stock' => $this->faker->numberBetween(0, 100),
            'activo' => $this->faker->boolean(),
        ];
    }
}
