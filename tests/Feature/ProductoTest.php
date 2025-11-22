<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use App\Models\Producto;

class ProductoTest extends TestCase
{
    use DatabaseMigrations;



    public function test_public_can_view_products_list()
    {
        Producto::create([
            'nombre' => 'Producto Test',
            'descripcion' => 'Descripción de prueba',
            'precio' => 100.00,
            'stock' => 10,
            'activo' => true
        ]);

        $response = $this->get('/productos');

        $response->assertStatus(200);
        $response->assertSee('Producto Test');
    }

    public function test_public_can_view_product_details()
    {
        $producto = Producto::create([
            'nombre' => 'Producto Detalle',
            'descripcion' => 'Descripción detalle',
            'precio' => 200.00,
            'stock' => 5,
            'activo' => true
        ]);

        $response = $this->get('/productos/' . $producto->id);

        $response->assertStatus(200);
        $response->assertSee('Producto Detalle');
        $response->assertSee('200.00');
    }

    public function test_inactive_product_returns_404()
    {
        $producto = Producto::create([
            'nombre' => 'Producto Inactivo',
            'descripcion' => 'Descripción inactivo',
            'precio' => 300.00,
            'stock' => 0,
            'activo' => false
        ]);

        $response = $this->get('/productos/' . $producto->id);

        $response->assertStatus(404);
    }
}
