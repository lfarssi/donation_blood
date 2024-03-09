<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\CsrfValideMiddleware;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware("web")->get("/csrf-token",function (){
    $csrfToekn=csrf_token();
    setcookie("csrfToken",$csrfToekn);
    return response()->json(["csrfToken"=>$csrfToekn]);
});

Route::post("/login",[AuthController::class,"login"]);
