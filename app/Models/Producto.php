<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $table = 'productos';
   // protected $primaryKey = 'id_producto';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'descripcion',
        'categoria',
        'material',
        'precio',
        'stock',
        'activo',
        'fecha_creacion'
    ];

    protected $casts = [
        'activo' => 'boolean',
        'precio' => 'decimal:2',
        'fecha_creacion' => 'datetime',
    ];
}

