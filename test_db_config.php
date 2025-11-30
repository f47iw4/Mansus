<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$output = "";

try {
    require __DIR__.'/vendor/autoload.php';
    $app = require __DIR__.'/bootstrap/app.php';
    $kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
    $kernel->bootstrap();

    $config = config('database.connections.mysql');
    $output .= "MySQL Config:\n" . print_r($config, true) . "\n";

    $default = config('database.default');
    $output .= "Default Connection: $default\n";

    $prefix = \Illuminate\Support\Facades\DB::connection('mysql')->getTablePrefix();
    $output .= "Table Prefix Type: " . gettype($prefix) . "\n";
    $output .= "Table Prefix Value: " . json_encode($prefix) . "\n";

} catch (\Throwable $e) {
    $output .= "Error: " . $e->getMessage() . "\n" . $e->getTraceAsString();
}

file_put_contents(__DIR__.'/db_debug_direct.txt', $output);
