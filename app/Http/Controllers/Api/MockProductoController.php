<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MockProductoController extends Controller
{
    public function index()
    {
        $productos = [
            [
                'id' => 1,
                'id_producto' => 1,
                'nombre' => 'Collar de Diamantes Eterno',
                'descripcion' => 'Elegante collar de oro blanco de 18k con diamantes naturales. Diseño atemporal que combina con cualquier ocasión.',
                'categoria' => 'Collar',
                'material' => 'Oro',
                'precio' => 2499.99,
                'stock' => 5,
                'activo' => true,
                'ventas' => 45,
                'imagen' => 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=400&auto=format&fit=crop',
            ],
            [
                'id' => 2,
                'id_producto' => 2,
                'nombre' => 'Anillo Solitario Brillante',
                'descripcion' => 'Anillo de compromiso con diamante solitario de 1 quilate. Engaste clásico en oro blanco.',
                'categoria' => 'Anillo',
                'material' => 'Oro',
                'precio' => 3999.99,
                'stock' => 3,
                'activo' => true,
                'ventas' => 67,
                'imagen' => 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop',
            ],
            [
                'id' => 3,
                'id_producto' => 3,
                'nombre' => 'Pendientes Perla Cultivada',
                'descripcion' => 'Pendientes de perlas cultivadas de agua dulce con cierre de oro amarillo de 14k.',
                'categoria' => 'Pendientes',
                'material' => 'Oro',
                'precio' => 899.99,
                'stock' => 12,
                'activo' => true,
                'ventas' => 89,
                'imagen' => 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&auto=format&fit=crop',
            ],
            [
                'id' => 4,
                'id_producto' => 4,
                'nombre' => 'Pulsera Eslabones Plata',
                'descripcion' => 'Pulsera de eslabones en plata de ley 925. Diseño minimalista y moderno.',
                'categoria' => 'Pulsera',
                'material' => 'Plata',
                'precio' => 299.99,
                'stock' => 20,
                'activo' => true,
                'ventas' => 123,
                'imagen' => 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400&auto=format&fit=crop',
            ],
            [
                'id' => 5,
                'id_producto' => 5,
                'nombre' => 'Collar Cadena Oro Rosa',
                'descripcion' => 'Delicada cadena de oro rosa de 18k. Perfecta para uso diario o especial.',
                'categoria' => 'Collar',
                'material' => 'Oro',
                'precio' => 1299.99,
                'stock' => 8,
                'activo' => true,
                'ventas' => 56,
                'imagen' => 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop',
            ],
            [
                'id' => 6,
                'id_producto' => 6,
                'nombre' => 'Anillo Banda Minimalista',
                'descripcion' => 'Anillo de banda ancha en plata bañada en oro. Estilo contemporáneo.',
                'categoria' => 'Anillo',
                'material' => 'Plata bañada',
                'precio' => 199.99,
                'stock' => 25,
                'activo' => true,
                'ventas' => 34,
                'imagen' => 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=400&auto=format&fit=crop',
            ],
            [
                'id' => 7,
                'id_producto' => 7,
                'nombre' => 'Pendientes Aro Grande',
                'descripcion' => 'Pendientes tipo aro en oro amarillo de 14k. Diseño clásico que nunca pasa de moda.',
                'categoria' => 'Pendientes',
                'material' => 'Oro',
                'precio' => 599.99,
                'stock' => 15,
                'activo' => true,
                'ventas' => 78,
                'imagen' => 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=400&auto=format&fit=crop',
            ],
            [
                'id' => 8,
                'id_producto' => 8,
                'nombre' => 'Pulsera Charm Personalizable',
                'descripcion' => 'Pulsera de plata con charms intercambiables. Crea tu propia historia.',
                'categoria' => 'Pulsera',
                'material' => 'Plata',
                'precio' => 449.99,
                'stock' => 10,
                'activo' => true,
                'ventas' => 92,
                'imagen' => 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=400&auto=format&fit=crop',
            ],
            [
                'id' => 9,
                'id_producto' => 9,
                'nombre' => 'Collar Gargantilla Moderna',
                'descripcion' => 'Gargantilla ajustable en oro blanco con detalle de circonita.',
                'categoria' => 'Collar',
                'material' => 'Oro',
                'precio' => 799.99,
                'stock' => 7,
                'activo' => true,
                'ventas' => 41,
                'imagen' => 'https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400&auto=format&fit=crop',
            ],
            [
                'id' => 10,
                'id_producto' => 10,
                'nombre' => 'Anillo Vintage Esmeralda',
                'descripcion' => 'Anillo vintage con esmeralda natural y detalles de diamantes. Pieza única.',
                'categoria' => 'Anillo',
                'material' => 'Oro',
                'precio' => 4599.99,
                'stock' => 2,
                'activo' => true,
                'ventas' => 12,
                'imagen' => 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=400&auto=format&fit=crop',
            ],
            [
                'id' => 11,
                'id_producto' => 11,
                'nombre' => 'Pendientes Botón Diamante',
                'descripcion' => 'Pendientes tipo botón con diamantes de 0.5 quilates cada uno. Elegancia pura.',
                'categoria' => 'Pendientes',
                'material' => 'Oro',
                'precio' => 1899.99,
                'stock' => 6,
                'activo' => true,
                'ventas' => 58,
                'imagen' => 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=400&auto=format&fit=crop',
            ],
            [
                'id' => 12,
                'id_producto' => 12,
                'nombre' => 'Pulsera Tenis Diamantes',
                'descripcion' => 'Pulsera tipo tenis con diamantes engastados. Lujo y sofisticación.',
                'categoria' => 'Pulsera',
                'material' => 'Oro',
                'precio' => 5999.99,
                'stock' => 4,
                'activo' => true,
                'ventas' => 23,
                'imagen' => 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop',
            ],
        ];

        return response()->json($productos);
    }

    public function show($id)
    {
        $productos = $this->index()->getData();
        $producto = collect($productos)->firstWhere('id', (int)$id);
        
        if (!$producto) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }
        
        return response()->json($producto);
    }
}
