<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Observers\TodoObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;

#[ObservedBy([TodoObserver::class])]
class todo extends Model
{
    protected $fillable = [
        'title',
        'todo',
        'date',
        'state_id'
    ];

    public function User(): BelongsTo
    {
        return $this->belongsTo(User::class);
    } 

    
}
