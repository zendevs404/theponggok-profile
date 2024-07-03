<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;

Route::get('/', [HomeController::class, 'index']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

Route::get('redirect', [HomeController::class, 'redirect'])->middleware('auth', 'verified');

Route::get('/view_event', [AdminController::class, 'view_event']);
Route::get('/view_product', [AdminController::class, 'view_product']);
Route::post('/add_product', [AdminController::class, 'add_product']);
Route::post('/add_event', [AdminController::class, 'add_event']);
Route::get('/show_product', [AdminController::class, 'show_product']);
Route::get('/delete_product/{id}', [AdminController::class, 'delete_product']);
Route::get('/update_product/{id}', [AdminController::class, 'update_product']);
Route::post('/update_product_confirm/{id}', [AdminController::class, 'update_product_confirm']);
Route::post('/add_comment', [HomeController::class, 'add_comment']);
Route::post('/add_reply', [HomeController::class, 'add_reply']);
