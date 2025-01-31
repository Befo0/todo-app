<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/todos', [TodoController::class, 'index'])->name('todos.index');
    Route::get('/list', [TodoController::class, 'list'])->name('todos.list');
    Route::post('/store', [TodoController::class, 'store'])->name('todos.store');
    Route::patch('/update/{todo}', [TodoController::class, 'update'])->name('todos.update');
    Route::delete('/delete/{todo}', [TodoController::class, 'destroy'])->name('todos.delete');
});

require __DIR__.'/auth.php';
