<?php
// Script para ejecutar el SQL directamente
require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

try {
    echo "Conectando a la base de datos...\n";
    
    // Leer el archivo SQL
    $sql = file_get_contents(__DIR__.'/fix_database.sql');
    
    // Separar por comandos
    $commands = array_filter(array_map('trim', explode(';', $sql)));
    
    foreach ($commands as $command) {
        if (empty($command) || strpos($command, '--') === 0) {
            continue;
        }
        
        try {
            DB::statement($command);
            echo "✓ Ejecutado: " . substr($command, 0, 50) . "...\n";
        } catch (\Exception $e) {
            echo "✗ Error: " . $e->getMessage() . "\n";
        }
    }
    
    echo "\n¡Listo! Verificando productos...\n";
    $count = DB::table('productos')->count();
    echo "Total de productos: $count\n";
    
} catch (\Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
}
