<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        '/api',
        'http://127.0.0.1:8000/'
    ];

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $this->addAllowedOrigin('http://localhost:3000');
        return parent::handle($request, $next);
    }

    /**
     * Add the allowed origin to the list.
     *
     * @param  string  $origin
     * @return void
     */
    protected function addAllowedOrigin($origin)
    {
        $this->except[] = $origin;
    }
}
