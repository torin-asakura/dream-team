<?php
declare(strict_types=1);

use Psr\Container\ContainerInterface;
use TwoFAS\Light\Http\Request\{Cookie, Request};
use TwoFAS\Light\Http\Route;
use TwoFAS\Light\Http\Middleware\{
	Check_Ajax,
	Check_Nonce,
	Check_Totp_Configured,
	Check_Totp_Enabled,
	Check_Logged_In,
	Check_User_Is_Admin,
	Create_User
};
use TwoFAS\Light\Http\Middleware\Middleware_Bag;
use WhichBrowser\Parser;

return [
	Cookie::class         => DI\create()
		->constructor( $_COOKIE ),
	Request::class        => DI\create( Request::class )
		->constructor(
			$_GET,
			$_POST,
			$_SERVER,
			DI\get( Cookie::class )
		),
	Route::class          => DI\create()
		->constructor(
			DI\get( Request::class ),
			DI\get( 'routes' )
		),
	Parser::class         => DI\factory( function ( ContainerInterface $c ) {
		return new Parser( $c->get( Request::class )->header( 'HTTP_USER_AGENT' ) );
	} ),
	Middleware_Bag::class => DI\factory( function ( ContainerInterface $c ) {
		$middleware_bag = new Middleware_Bag();

		$middleware_bag->add_middleware( 'ajax', $c->get( Check_Ajax::class ) );
		$middleware_bag->add_middleware( 'nonce', $c->get( Check_Nonce::class ) );
		$middleware_bag->add_middleware( 'totp_enabled', $c->get( Check_Totp_Enabled::class ) );
		$middleware_bag->add_middleware( 'totp_configured', $c->get( Check_Totp_Configured::class ) );
		$middleware_bag->add_middleware( 'user_logged', $c->get( Check_Logged_In::class ) );
		$middleware_bag->add_middleware( 'user_created', $c->get( Create_User::class ) );
		$middleware_bag->add_middleware( 'admin', $c->get( Check_User_Is_Admin::class ) );

		return $middleware_bag;
	} )
];
