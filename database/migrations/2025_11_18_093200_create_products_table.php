<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('productos', function (Blueprint $table) {
            
            // Primary Key igual a tu tabla antigua
            $table->integer('id_producto')->autoIncrement();

            $table->string('nombre', 150);
            $table->text('descripcion')->nullable();
            $table->string('categoria', 100)->nullable();
            $table->string('material', 100)->nullable();
            $table->decimal('precio', 10, 2);
            $table->integer('stock')->default(0);
            $table->boolean('activo')->default(true);

            // Fecha creación (sin created_at / updated_at)
            $table->dateTime('fecha_creacion')->default(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
