<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HobbyController;

Route::post('/SearchController', [SearchController::class, 'search']);

Route::get('/your-project-name', [HobbyController::class, 'index']);
Route::post('/your-project-name', [HobbyController::class, 'store']);
Route::get('/your-project-name/{id}', [HobbyController::class, 'show']);
Route::put('/your-project-name/{id}', [HobbyController::class, 'update']);
Route::delete('/your-project-name/{id}', [HobbyController::class, 'destroy']);

