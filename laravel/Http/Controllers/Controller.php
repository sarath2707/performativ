<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public function getUserByFirstNameAndLastName(Request $request, $first_name, $last_name)
    {
        // Validate the request parameters
        $validator = Validator::make(['first_name' => $first_name, 'last_name' => $last_name], [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Retrieve user data based on first name and last name
        $user = User::where('first_name', $first_name)
            ->where('last_name', $last_name)
            ->first();

        if ($user) {
            // User found, return the user data
            return response()->json($user);
        } else {
            // User not found
            return response()->json(['error' => 'User not found'], 404);
        }
    }
}
