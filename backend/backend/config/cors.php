<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    /*
    |--------------------------------------------------------------------------
    | CORS Paths
    |--------------------------------------------------------------------------
    |
    | Paths which CORS configuration applies to. API routes and Sanctum's
    | CSRF cookie endpoint are included for proper API and authentication
    | functionality.
    */
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    /*
    |--------------------------------------------------------------------------
    | Allowed HTTP Methods
    |--------------------------------------------------------------------------
    |
    | Indicates which HTTP methods are allowed for CORS requests.
    | Including OPTIONS is important for preflight requests.
    */
    'allowed_methods' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

    /*
    |--------------------------------------------------------------------------
    | Allowed Origins
    |--------------------------------------------------------------------------
    |
    | Specifies which origins are allowed to make CORS requests.
    | For local development, we allow the React development server.
    */
    'allowed_origins' => ['http://localhost:3000', 'http://127.0.0.1:3000'],

    /*
    |--------------------------------------------------------------------------
    | Allowed Origin Patterns
    |--------------------------------------------------------------------------
    |
    | Define patterns for origins that should be allowed (uses fnmatch).
    | Useful for allowing multiple subdomains or development environments.
    */
    'allowed_origins_patterns' => [],

    /*
    |--------------------------------------------------------------------------
    | Allowed Headers
    |--------------------------------------------------------------------------
    |
    | Headers that are allowed in CORS requests. Authorization is required
    | for token authentication and X-XSRF-TOKEN for CSRF protection.
    */
    'allowed_headers' => [
        'X-Requested-With',
        'Content-Type',
        'X-Token-Auth',
        'Authorization',
        'Accept',
        'X-XSRF-TOKEN'
    ],

    /*
    |--------------------------------------------------------------------------
    | Exposed Headers
    |--------------------------------------------------------------------------
    |
    | Headers that should be exposed to the browser. X-XSRF-TOKEN is required
    | for Laravel's CSRF protection to work with Ajax requests.
    */
    'exposed_headers' => ['X-XSRF-TOKEN'],

    /*
    |--------------------------------------------------------------------------
    | Max Age
    |--------------------------------------------------------------------------
    |
    | Maximum number of seconds browsers should cache CORS preflight responses.
    | A value of 0 will disable caching.
    */
    'max_age' => 0,

    /*
    |--------------------------------------------------------------------------
    | Credentials Support
    |--------------------------------------------------------------------------
    |
    | Whether credentials (cookies, authorization headers, TLS client certs)
    | are allowed in CORS requests. Required for Sanctum authentication.
    */
    'supports_credentials' => true,

];
