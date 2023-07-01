<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function search(Request $request)
    {
        $searchText = $request->input('searchText');

        // Perform your search logic using $searchText
        // For example, assuming you have a 'users' table in your database:

        $users = User::where('first_name', 'like', '%' . $searchText . '%')
                     ->orWhere('last_name', 'like', '%' . $searchText . '%')
                     ->get();

        return response()->json($users);
    }
}
