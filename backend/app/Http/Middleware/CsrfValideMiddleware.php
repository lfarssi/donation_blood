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
        $tokenFromHeader = $request->header('Authorization'); 

        // Extract just the token value
        $authHeaderParts = explode(' ', $tokenFromHeader);
        $tokenFromHeader = $authHeaderParts[1];
        $tokenFromCookie =$_COOKIE["csrfToken"];
    
        // Verify they match
        if($tokenFromHeader != $tokenFromCookie) {
    return response()->json(['error' => 'token mismacth'],419); 
         
        }
    
        return $next($request);
      }
    
    
}
