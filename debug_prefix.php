<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

echo "=== DATABASE CONFIGURATION DEBUG ===\n\n";

$connection = config('database.default');
echo "Default Connection: {$connection}\n\n";

$config = config("database.connections.{$connection}");

echo "Connection Config:\n";
echo "  Driver: " . ($config['driver'] ?? 'N/A') . "\n";
echo "  Host: " . ($config['host'] ?? 'N/A') . "\n";
echo "  Database: " . ($config['database'] ?? 'N/A') . "\n";
echo "  Prefix Type: " . gettype($config['prefix'] ?? null) . "\n";
echo "  Prefix Value: ";
var_dump($config['prefix'] ?? null);
echo "\n";

// Test actual connection
try {
    $prefix = DB::connection($connection)->getTablePrefix();
    echo "Actual getTablePrefix() Type: " . gettype($prefix) . "\n";
    echo "Actual getTablePrefix() Value: ";
    var_dump($prefix);
} catch (\Exception $e) {
    echo "ERROR getting table prefix: " . $e->getMessage() . "\n";
}

echo "\n=== ENV VARIABLES ===\n";
echo "DB_CONNECTION: " . env('DB_CONNECTION', 'NOT SET') . "\n";
echo "DB_PREFIX: " . (env('DB_PREFIX') === null ? 'NOT SET' : env('DB_PREFIX')) . "\n";