<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

use Psr\Container\ContainerInterface;
use TwoFAS\Light\Authentication\Jetpack_User_Data;
use TwoFAS\Light\Authentication\Middleware\Jetpack_Interceptor;
use WP_User;

class Jetpack_User_Data_Action implements Hook_Interface {

	/**
	 * @var ContainerInterface
	 */
	private $container;

	/**
	 * @param ContainerInterface $container
	 */
	public function __construct( ContainerInterface $container ) {
		$this->container = $container;
	}

	public function register_hook() {
		add_action( 'jetpack_sso_handle_login', [ $this, 'set_jetpack_user_data' ], 99, 2 );
	}

	/**
	 * @param WP_User|null|bool $wp_user
	 * @param object            $jetpack_user_data
	 */
	public function set_jetpack_user_data( $wp_user, $jetpack_user_data ) {
		if ( ! ( $wp_user instanceof WP_User ) ) {
			return;
		}

		/** @var Jetpack_Interceptor $jetpack_interceptor */
		$jetpack_interceptor = $this->container->get( Jetpack_Interceptor::class );
		$jetpack_interceptor->set_user_data( new Jetpack_User_Data( $jetpack_user_data ) );
	}
}
