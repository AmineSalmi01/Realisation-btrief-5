<?php

use App\Http\Controllers\PromotionController;
use App\Http\Controllers\ApprenantsController;
use App\Http\Controllers\BriefController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Promotion

Route::post('Promotion', [PromotionController::class, 'store']);
Route::get('Promotion', [PromotionController::class, 'index']);
Route::get('Promotion/{id}', [PromotionController::class, 'getPromotion']);
Route::put('Promotion/{id}', [PromotionController::class, 'update']);
Route::delete('Promotion/{id}', [PromotionController::class, 'destroy']);

//Apprenants

Route::post('Apprenants', [ApprenantsController::class, 'store']);
Route::get('Apprenants', [ApprenantsController::class, 'index']);
Route::get('Apprenants/{id}', [ApprenantsController::class, 'getapprenant']);
Route::put('Apprenants/{id}', [ApprenantsController::class, 'update']);
Route::delete('Apprenants/{id}', [ApprenantsController::class, 'destroy']);

//brief

Route::post('Brief', [BriefController::class, 'store']);
Route::get('Brief', [BriefController::class, 'index']);
Route::get('Brief/{id}', [BriefController::class, 'getBreif']);
Route::put('Brief/{id}', [BriefController::class, 'update']);
Route::delete('Brief/{id}', [BriefController::class, 'destroy']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
