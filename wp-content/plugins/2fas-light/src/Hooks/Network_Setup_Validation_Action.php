<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Exceptions\Plugin_Not_Active_Network_Wide_Exception;

class Network_Setup_Validation_Action extends Multisite_Setup_Validation_Action {
	
	/**
	 * @var string
	 */
	protected $template = 'local_activation_on_multinetwork_error.html.twig';
	
	public function validate() {
		if ( ! $this->can_validate() || ! $this->is_multinetwork_installation() ) {
			return;
		}
		
		try {
			foreach ( get_networks() as $network ) {
				$this->validate_plugin_is_active_network_wide_on_network( $network->id );
			}
		} catch ( Plugin_Not_Active_Network_Wide_Exception $e ) {
			$this->render_warning();
		}
	}
}
