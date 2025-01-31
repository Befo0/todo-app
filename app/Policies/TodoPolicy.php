<?php

namespace App\Policies;

use App\Models\User;
use App\Models\todo;
use Illuminate\Auth\Access\Response;

class TodoPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, todo $todo): bool
    {
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, todo $todo): bool
    {
        return $todo->user()->is($user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, todo $todo): bool
    {
        return $this->update($user, $todo);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, todo $todo): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, todo $todo): bool
    {
        return false;
    }
}
