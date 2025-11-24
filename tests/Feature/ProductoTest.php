<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Producto;
use App\Models\User;

class ProductoTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        // Create a user if auth is needed (currently middleware is commented out, but good practice)
        // $this->actingAs(User::factory()->create(['is_admin' => true]));
    }

    /** @test */
    public function it_can_list_products()
    {
        Producto::factory()->count(5)->create();

        $response = $this->get(route('admin.productos.index'));

        $response->assertStatus(200);
        $response->assertViewHas('productos');
    }

    /** @test */
    public function it_can_create_a_product()
    {
        $data = [
            'nombre' => 'Nuevo Producto',
            'descripcion' => 'Descripción del producto',
            'categoria' => 'Anillos',
            'material' => 'Oro',
            'precio' => 100.50,
            'stock' => 10,
            'activo' => true,
        ];

        $response = $this->post(route('admin.productos.store'), $data);

        $response->assertRedirect(route('admin.productos.index'));
        $this->assertDatabaseHas('productos', ['nombre' => 'Nuevo Producto']);
    }

    /** @test */
    public function it_can_update_a_product()
    {
        $producto = Producto::factory()->create();

        $data = [
            'nombre' => 'Producto Actualizado',
            'descripcion' => 'Nueva descripción',
            'categoria' => 'Collares',
            'material' => 'Plata',
            'precio' => 150.00,
            'stock' => 20,
            'activo' => false,
        ];

        $response = $this->put(route('admin.productos.update', $producto), $data);

        $response->assertRedirect(route('admin.productos.index'));
        $this->assertDatabaseHas('productos', ['id_producto' => $producto->id_producto, 'nombre' => 'Producto Actualizado']);
    }

    /** @test */
    public function it_can_delete_a_product()
    {
        $producto = Producto::factory()->create();

        $response = $this->delete(route('admin.productos.destroy', $producto));

        $response->assertRedirect(route('admin.productos.index'));
        $this->assertDatabaseMissing('productos', ['id_producto' => $producto->id_producto]);
    }

    /** @test */
    public function it_can_toggle_product_status()
    {
        $producto = Producto::factory()->create(['activo' => true]);

        $response = $this->patch(route('admin.productos.toggle', $producto));

        $response->assertRedirect(route('admin.productos.index'));
        $this->assertDatabaseHas('productos', ['id_producto' => $producto->id_producto, 'activo' => 0]);
    }

    /** @test */
    public function api_returns_products_collection()
    {
        Producto::factory()->count(3)->create();

        $response = $this->get(route('admin.api.productos'));

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'data' => [
                         '*' => [
                             'id',
                             'nombre',
                             'precio',
                             'stock',
                             'activo'
                         ]
                     ]
                 ]);
    }
}
