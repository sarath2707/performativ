<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HobbyController;
use App\Http\Controllers\SearchController;

Route::post('/search', [SearchController::class, 'search']);
Route::get('/users/id/{id}', [UserController::class, 'getUserByID']);
Route::get('/users/first-name/{firstName}', [UserController::class, 'getUserByFirstName']);
Route::get('/users/last-name/{lastName}', [UserController::class, 'getUserByLastName']);
Route::get('/users/book-name/{bookName}', [UserController::class, 'getUserByBookName']);



Route::get('/users', 'UserController@index');
Route::get('/users/{id}', 'UserController@show');
Route::put('/users/{id}', 'UserController@update');



Route::post('/SearchController', [SearchController::class, 'search']);

Route::get('/your-project-name', [HobbyController::class, 'index']);
Route::post('/your-project-name', [HobbyController::class, 'store']);
Route::get('/your-project-name/{id}', [HobbyController::class, 'show']);
Route::put('/your-project-name/{id}', [HobbyController::class, 'update']);
Route::delete('/your-project-name/{id}', [HobbyController::class, 'destroy']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
