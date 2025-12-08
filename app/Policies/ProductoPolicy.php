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
     * Determina si el usuario puede ver cualquier producto.
     */
    public function viewAny(User $user): bool
    {
        // Ajusta la lógica según sea necesario; por ahora permite a todos los usuarios autenticados
        return true;
    }

    /**
     * Determina si el usuario puede ver el producto.
     */
    public function view(User $user, Producto $producto): bool
    {
        return true;
    }

    /**
     * Determina si el usuario puede crear un producto.
     */
    public function create(User $user): bool
    {
        return $user->role === 'admin';
    }

    /**
     * Determina si el usuario puede actualizar el producto.
     */
    public function update(User $user, Producto $producto): bool
    {
        return $user->role === 'admin';
    }

    /**
     *  Determina si el usuario puede eliminar el producto.
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
