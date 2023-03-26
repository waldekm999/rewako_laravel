<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DashboardAdminController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Stripe;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'index']
    )->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('stuff')->middleware(['auth', 'admin'])->group(function () {
    Route::get('/dashboard', [DashboardAdminController::class, 'index']
        )->name('dashboard.admin');
    Route::get('/stripes', [StripeController::class, 'index']
        )->name('stripes.index');
    Route::get('/stripes/add', [StripeController::class,'create']
        )->name('stripes.add');
    Route::post('/stripes/store', [StripeController::class,'store']
        )->name('stripes.store');
    Route::get('stripes/{stripe}', [StripeController::class, 'show']
        )->name('stripes.edit');               
});


require __DIR__.'/auth.php';
