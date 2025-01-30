<?php

namespace App\Observers;

use App\Models\todo;

class TodoObserver
{
    /**
     * Handle the todo "creating" event.
     */
    public function creating(todo $todo): void
    {
        $todo->state_id = 1;
    }

    /**
     * Handle the todo "updating" event.
     */
    public function updating(todo $todo): void
    {
        $todo->state_id = 2;
    }

    /**
     * Handle the todo "deleted" event.
     */
    public function deleted(todo $todo): void
    {
        //
    }

    /**
     * Handle the todo "restored" event.
     */
    public function restored(todo $todo): void
    {
        //
    }

    /**
     * Handle the todo "force deleted" event.
     */
    public function forceDeleted(todo $todo): void
    {
        //
    }
}
