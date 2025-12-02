<?php

namespace App\Policies;

use App\Models\Producto;
use App\Models\User; // adjust if you have a User model
use Illuminate\Auth\Access\HandlesAuthorization;

class ProductoPolicy
{
    use HandlesAuthorization;

    /**
     * Perform pre-authorization checks.
     */
    public function before(User $user, string $ability): bool|null
    {
        if ($user->role === 'admin') {
            return true;
        }
    
        return null;
    }

    /**
     * Determine whether the user can view any products.
     */
    public function viewAny(User $user): bool
    {
        // Adjust logic as needed; for now allow all authenticated users
        return true;
    }

    /**
     * Determine whether the user can view the product.
     */
    public function view(User $user, Producto $producto): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create products.
     */
    public function create(User $user): bool
    {
        return $user->role === 'admin';
    }

    /**
     * Determine whether the user can update the product.
     */
    public function update(User $user, Producto $producto): bool
    {
        return $user->role === 'admin';
    }

    /**
     * Determine whether the user can delete the product.
     */
    public function delete(User $user, Producto $producto): bool
    {
        return $user->role === 'admin';
    }

    /**
     * Determine whether the user can toggle the product.
     */
    public function toggle(User $user, Producto $producto): bool
    {
        return $user->role === 'admin';
    }
}
