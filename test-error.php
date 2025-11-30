<?php

// Enable error display
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

echo "PHP Version: " . PHP_VERSION . "\n";
echo "Current directory: " . __DIR__ . "\n";

// Check if .env file exists
if (file_exists(__DIR__ . '/.env')) {
    echo ".env file EXISTS\n";
    echo "First 5 lines of .env:\n";
    $lines = file(__DIR__ . '/.env');
    for ($i = 0; $i < min(5, count($lines)); $i++) {
        echo $lines[$i];
    }
} else {
    echo ".env file DOES NOT EXIST\n";
}

echo "\n--- Testing Laravel Bootstrap ---\n";

try {
    require __DIR__.'/vendor/autoload.php';
    echo "Autoload: OK\n";
    
    $app = require_once __DIR__.'/bootstrap/app.php';
    echo "Bootstrap: OK\n";
    
    $kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
    echo "Kernel: OK\n";
    
    echo "\nNo errors detected!\n";
} catch (Exception $e) {
    echo "\nERROR FOUND:\n";
    echo "Message: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . ":" . $e->getLine() . "\n";
    echo "\nStack trace:\n" . $e->getTraceAsString() . "\n";
}
