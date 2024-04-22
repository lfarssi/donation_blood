<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request) 
{
  // Validate input
 /* $request->validate($request, [
    'email' => 'required|email', 
    'password' => 'required'
  ]);*/

  // Attempt to authenticate user
  if(!auth()->attempt($request->only('email', 'password'))) {
    return response()->json(['error' => 'user name or password incorect',"valideLogin"=>false],); 
  }else{
 $user = auth()->user();  

 $token = csrf_token();

   return response()->json(['token' => $token,"user"=>$user,"valideLogin"=>true]);
 }

 
}
public function logout(Request $request){
        Auth::logout();

        return response()->json(['message' => 'Successfully logged out'],200);
}
}
