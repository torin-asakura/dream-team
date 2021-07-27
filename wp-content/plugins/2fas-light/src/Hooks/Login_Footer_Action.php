<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Storage\Storage;
use TwoFAS\Light\Templates\Twig;

class Login_Footer_Action implements Hook_Interface {
	
	/**
	 * @var Twig
	 */
	private $twig;
	
	/**
	 * @var Request
	 */
	private $request;
	
	/**
	 * @var Storage
	 */
	private $storage;
	
	public function __construct( Twig $twig, Request $request, Storage $storage ) {
		$this->twig    = $twig;
		$this->request = $request;
		$this->storage = $storage;
	}
	
	public function register_hook() {
		$interim_login = $this->request->request( 'interim-login' );
		
		if ( empty( $interim_login ) ) {
			add_action( 'login_footer', [ $this, 'add_footer' ] );
		}
	}
	
	public function add_footer() {
		$user_storage    = $this->storage->get_user_storage();
		$options_storage = $this->storage->get_options();
		$params[ 'login_configuration' ] = false;
		
		if ( $user_storage->is_wp_user_set()
		     && ( ! $user_storage->is_totp_enabled() || ! $user_storage->is_totp_configured() )
		     && $options_storage->has_obligatory_role( $user_storage->get_roles() ) ) {
			$params[ 'login_configuration' ] = true;
		}
		
		echo $this->twig->render_view( 'login_footer.html.twig', $params );
	}
}
