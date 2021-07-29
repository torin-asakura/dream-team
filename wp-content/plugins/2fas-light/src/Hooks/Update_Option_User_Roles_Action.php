<?php

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Storage\DB_Wrapper;
use TwoFAS\Light\Storage\Options_Storage;
use UnexpectedValueException;

class Update_Option_User_Roles_Action implements Hook_Interface {

	/**
	 * @var DB_Wrapper
	 */
	private $db;

	/**
	 * @var Options_Storage
	 */
	private $options_storage;

	/**
	 * @param DB_Wrapper      $db
	 * @param Options_Storage $options_storage
	 */
	public function __construct( DB_Wrapper $db, Options_Storage $options_storage ) {
		$this->db              = $db;
		$this->options_storage = $options_storage;
	}

	public function register_hook() {
		$update_option_user_roles_hook_name = 'update_option_' . $this->db->get_prefix() . 'user_roles';
		add_action( $update_option_user_roles_hook_name, [ $this, 'update' ], 10, 2 );
	}

	/**
	 * @param mixed $old_value
	 * @param mixed $new_value
	 */
	public function update( $old_value, $new_value ) {
		if ( ! is_array( $old_value ) || ! is_array( $new_value ) ) {
			return;
		}

		$wp_roles = array_keys( $new_value );

		try {
			$this->update_obligatory_roles( $wp_roles );
			$this->update_remember_browser_allowed_roles( $wp_roles );
		} catch ( UnexpectedValueException $e ) {
			return;
		}
	}

	/**
	 * @param array $wp_roles
	 *
	 * @throws UnexpectedValueException
	 */
	private function update_obligatory_roles( array $wp_roles ) {
		$twofas_roles   = $this->options_storage->get_obligatory_roles();
		$outdated_roles = array_diff( $twofas_roles, $wp_roles );

		if ( ! empty( $outdated_roles ) ) {
			$valid_twofas_roles = array_diff( $twofas_roles, $outdated_roles );
			$this->options_storage->set_obligatory_roles( array_values( $valid_twofas_roles ) );
		}
	}
	
	/**
	 * @param array $wp_roles
	 *
	 * @throws UnexpectedValueException
	 */
	private function update_remember_browser_allowed_roles( array $wp_roles ) {
		$browser_allowed_roles   = $this->options_storage->get_remember_browser_allowed_roles();
		$outdated_roles = array_diff( $browser_allowed_roles, $wp_roles );
		
		if ( ! empty( $outdated_roles ) ) {
			$valid_twofas_roles = array_diff( $browser_allowed_roles, $outdated_roles );
			$this->options_storage->set_remember_browser_allowed_roles( array_values( $valid_twofas_roles ) );
		}
	}
}
