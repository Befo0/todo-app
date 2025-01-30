<?php

namespace App\Observers;

use App\Models\todo;

class TodoObserver
{
    /**
     * Handle the todo "created" event.
     */
    public function creating(todo $todo): void
    {
        $todo->state_id = 1;
    }

    /**
     * Handle the todo "updated" event.
     */
    public function updated(todo $todo): void
    {
        //
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
