<?php

use Illuminate\Support\Facades\Hash;

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$user = App\Models\User::where('email', 'admin@mansus.com')->first();

if ($user) {
    $user->password = Hash::make('admin123');
    $user->save();
    echo "Password updated successfully for {$user->email}\n";
} else {
    echo "User not found\n";
}
