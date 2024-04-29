<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CsrfValideMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $tokenFromHeader = $request->only("csrfToken");
        
    
        // Verify they match
       /* if($tokenFromHeader != $tokenFromCookie) {
    return response()->json(['error' => 'token mismacth',"cookie"=>$tokenFromCookie,"equals"=>$tokenFromHeader != $tokenFromCookie],419); 
         
        }*/
    
        return $next($request);
      }
    
    
}
