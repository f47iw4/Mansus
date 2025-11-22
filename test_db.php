<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

try {
    // Force sqlite connection
    config(['database.default' => 'sqlite']);
    config(['database.connections.sqlite.database' => ':memory:']);

    $pdo = Illuminate\Support\Facades\DB::connection()->getPdo();
    echo "Connected to sqlite successfully.\n";
    
    // Try schema builder
    $builder = Illuminate\Support\Facades\Schema::connection('sqlite');
    if ($builder->hasTable('migrations')) {
        echo "Migrations table exists (or check passed).\n";
    } else {
        echo "Migrations table does not exist.\n";
    }

} catch (Exception $e) {
    echo "Connection failed: " . $e->getMessage() . "\n";
    echo $e->getTraceAsString();
}
