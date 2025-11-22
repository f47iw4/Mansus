<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// Se renombró de 'Product' a 'Producto' para mantener consistencia con el nombre de la tabla 'productos'
// y el idioma del proyecto (Español).
class Producto extends Model
{
    // nombre de la tabla
    protected $table = 'productos';

    protected $primaryKey = 'id';

    // sin timestamps automáticos
    public $timestamps = false;

    // campos para rellenar masivamente
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
}