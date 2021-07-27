<?php
declare(strict_types=1);

use Endroid\QrCode\{QrCode, QrCodeInterface};
use Psr\Container\ContainerInterface;
use Twig\Environment as Twig_Environment;
use Twig\Loader\{FilesystemLoader, LoaderInterface};
use Twig\RuntimeLoader\ContainerRuntimeLoader;
use Twig\TwigFunction;
use TwoFAS\Light\Exceptions\Handler\{Error_Handler_Interface, Logger_Interface};
use TwoFAS\Light\Exceptions\Handler\{Error_Handler, Null_Logger};
use TwoFAS\Light\Factories\Session_Storage_Factory;
use TwoFAS\Light\Helpers\{Flash, Time, URL};
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Storage\{Session_Storage_Interface, User_Storage};
use TwoFAS\Light\Storage\DB_Wrapper;
use TwoFAS\Light\Templates\Browser_Twig_Extension;

/**
 * --------------------------------------------------------------------------------------------------------------------
 * Core
 * --------------------------------------------------------------------------------------------------------------------
 */
global $wpdb;

return [
	DB_Wrapper::class                => DI\create()
		->constructor( $wpdb ),
	LoaderInterface::class           => DI\create( FilesystemLoader::class )
		->constructor( TWOFAS_LIGHT_TEMPLATES_PATH ),
	Twig_Environment::class          => DI\factory(
		function ( ContainerInterface $c ) {
			$twig_environment = new Twig_Environment( $c->get( LoaderInterface::class ) );
			$twig_environment->addGlobal( 'flash', $c->get( Flash::class ) );
			$twig_environment->addExtension( $c->get( Browser_Twig_Extension::class ) );
			$twig_environment->addFunction( new TwigFunction( 'create_url', [ URL::class, 'create' ] ) );
			$twig_environment->addFunction( new TwigFunction( 'create_form_nonce', [ URL::class, 'create_form_nonce' ] ) );
			$twig_environment->addFunction( new TwigFunction( 'timestamp_to_wp_datetime', [ Time::class, 'timestamp_to_wp_datetime']));
			$twig_environment->addFunction( new TwigFunction( 'translate_user_role', 'translate_user_role' ) );
			$twig_environment->addFunction( new TwigFunction( 'wp_kses', 'wp_kses' ) );
			$twig_environment->addFunction( new TwigFunction( 'sprintf', 'sprintf' ) );
			$twig_environment->addFunction( new TwigFunction( 'login_header', 'login_header' ) );
			$twig_environment->addFunction( new TwigFunction( 'login_footer', 'login_footer' ) );
			$twig_environment->addFunction( new TwigFunction( 'esc_html__', 'esc_html__' ) );
			$twig_environment->addFunction( new TwigFunction( 'esc_attr__', 'esc_attr__' ) );
			$twig_environment->addFunction( new TwigFunction( '__', '__' ) );
			$twig_environment->addFunction( new TwigFunction( '_n', '_n' ) );
			$twig_environment->addRuntimeLoader( $c->get( ContainerRuntimeLoader::class ) );
			
			return $twig_environment;
		} ),
	Logger_Interface::class          => DI\autowire( Null_Logger::class ),
	Error_Handler_Interface::class   => DI\autowire( Error_Handler::class )
		->constructor( DI\get(Logger_Interface::class) )
		->constructorParameter('logging_allowed', true),
	QrCodeInterface::class           => DI\autowire( QrCode::class ),
	User_Storage::class              => DI\factory(
		function ( ContainerInterface $c ) {
			$storage = new User_Storage( $c->get( DB_Wrapper::class ) );
			
			if ( function_exists( 'wp_get_current_user' ) ) {
				$wp_user = wp_get_current_user();
				
				if ( $wp_user->ID > 0 ) {
					$storage->set_wp_user( $wp_user );
				}
			}
			
			return $storage;
		} ),
	Session_Storage_Interface::class => Di\factory(
		function ( ContainerInterface $c ) {
			$factory = new Session_Storage_Factory( $c->get( DB_Wrapper::class ), $c->get( Request::class ) );
			
			return $factory->create();
		} )
];
