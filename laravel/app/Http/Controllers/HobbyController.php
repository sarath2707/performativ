<?php

namespace App\Http\Controllers;

use App\Models\Hobby;
use Illuminate\Http\Request;

class HobbyController extends Controller
{
    public function index()
    {
        $hobby = Hobby::all();
        return response()->json($hobby);
    }

    public function store(Request $request)
    {
        $hobby = new Hobby();
        $hobby->name = $request->name;
        $hobby->description = $request->description;
        $hobby->tags = $request->tags;
        var_dump($hobby);
        $hobby->save();

        return response()->json($hobby, 201);
    }

    public function show(Hobby $hobby)
    {
        return response()->json($hobby);
    }

    public function update(Request $request, Hobby $hobby)
    {
        $hobby->name = $request->name;
        $hobby->description = $request->description;
        $hobby->tags = $request->tags;
        $hobby->save();

        return response()->json($hobby);
    }

    public function destroy(Hobby $hobby)
    {
        $hobby->delete();

        return response()->json(null, 204);
    }
}

