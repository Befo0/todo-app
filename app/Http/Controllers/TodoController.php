<?php

namespace App\Http\Controllers;

use App\Models\todo;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
       return Inertia::render('Todo/Index');
    }

    /**
     * Show a list of todos.
     */
    public function list(Request $request): Response 
    {
        $userId = $request->user()->id;
        $todos = todo::all()->where('user_id', $userId);


        return Inertia::render('Todo/List', compact('todos'));
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:100',
            'todo' => 'required|string|max:255',
            'date' => [
                'required',
                'date',
                'after_or_equal:' . now()->toDateString(),
            ],
        ]);

        $request->user()->todo()->create($validated);

        return redirect(route('todos.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(todo $todo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, todo $todo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(todo $todo)
    {
        //
    }
}
