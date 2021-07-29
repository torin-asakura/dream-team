<?php

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Exceptions\Plugin_Not_Active_Network_Wide_Exception;
use TwoFAS\Light\Templates\Twig;

class Multisite_Setup_Validation_Action implements Hook_Interface {
	
	const CAPABILITY_REQUIRED_TO_SEE_NOTIFICATION = 'activate_plugins';
	
	/**
	 * @var Twig
	 */
	protected $twig;
	
	/**
	 * @var string
	 */
	protected $template = 'local_activation_on_multisite_error.html.twig';
	
	/**
	 * @param Twig $twig
	 */
	public function __construct( Twig $twig ) {
		$this->twig = $twig;
	}
	
	public function register_hook() {
		add_action( 'admin_init', [ $this, 'validate' ] );
	}
	
	public function validate() {
		if ( ! $this->can_validate() || $this->is_multinetwork_installation() ) {
			return;
		}
		
		try {
			$this->validate_plugin_is_active_network_wide_on_network();
		} catch ( Plugin_Not_Active_Network_Wide_Exception $e ) {
			$this->render_warning();
		}
	}
	
	protected function can_validate(): bool {
		return is_multisite() && current_user_can( self::CAPABILITY_REQUIRED_TO_SEE_NOTIFICATION );
	}
	
	protected function is_multinetwork_installation(): bool {
		$network_count = get_networks( [ 'count' => true ] );
		
		return $network_count > 1;
	}
	
	/**
	 * @param int|null $network_id
	 *
	 * @throws Plugin_Not_Active_Network_Wide_Exception
	 */
	protected function validate_plugin_is_active_network_wide_on_network( $network_id = null ) {
		$network_activated_plugins = array_keys( get_network_option( $network_id, 'active_sitewide_plugins' ) );
		if ( ! in_array( TWOFAS_LIGHT_PLUGIN_BASENAME, $network_activated_plugins, true ) ) {
			throw new Plugin_Not_Active_Network_Wide_Exception();
		}
	}
	
	protected function render_warning() {
		$callback = function () {
			echo $this->twig->render_view( $this->template );
		};
		
		add_action( 'admin_notices', $callback );
		add_action( 'network_admin_notices', $callback );
	}
}
