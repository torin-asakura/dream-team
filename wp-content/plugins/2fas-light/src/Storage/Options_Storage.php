<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Storage;

use UnexpectedValueException;

class Options_Storage {
	
	const PLUGIN_VERSION                 = 'twofas_light_plugin_version';
	const OBLIGATORY_ROLES               = 'twofas_light_obligatory_roles';
	const REMEMBER_BROWSER_ALLOWED_ROLES = 'twofas_light_remember_browser_allowed_rolesl';
	
	/**
	 * @var array
	 */
	private $wp_options = [
		self::PLUGIN_VERSION,
		self::OBLIGATORY_ROLES,
		self::REMEMBER_BROWSER_ALLOWED_ROLES
	];
	
	/**
	 * @return string|false
	 */
	public function get_twofas_light_plugin_version() {
		return get_option( self::PLUGIN_VERSION );
	}
	
	public function set_twofas_light_plugin_version( string $version ) {
		update_option( self::PLUGIN_VERSION, $version );
	}
	
	public function delete_wp_options() {
		foreach ( $this->wp_options as $option_name ) {
			delete_option( $option_name );
		}
	}
	
	public function get_obligatory_roles(): array {
		$roles = get_option( self::OBLIGATORY_ROLES, [] );
		
		if ( is_array( $roles ) ) {
			return $roles;
		}
		
		return [];
	}
	
	public function set_obligatory_roles( array $roles ) {
		update_option( self::OBLIGATORY_ROLES, $roles );
	}
	
	/**
	 * @param array $user_roles
	 *
	 * @return bool
	 *
	 * @throws UnexpectedValueException
	 */
	public function has_obligatory_role( array $user_roles ): bool {
		$roles        = $this->get_obligatory_roles();
		$intersection = array_intersect( $user_roles, $roles );
		
		return ! empty( $intersection );
	}
	
	public function get_remember_browser_allowed_roles(): array{
		$roles = get_option( self::REMEMBER_BROWSER_ALLOWED_ROLES, [] );
		
		if ( is_array( $roles ) ) {
			return $roles;
		}
	
		return [];
	}
	
	public function set_remember_browser_allowed_roles( array $roles ) {
		update_option( self::REMEMBER_BROWSER_ALLOWED_ROLES, $roles );
	}
	
	/**
	 * @param array $user_roles
	 *
	 * @return bool
	 *
	 * @throws UnexpectedValueException
	 */
	public function has_remember_browser_allowed_role( array $user_roles ): bool {
		$roles        = $this->get_remember_browser_allowed_roles();
		$intersection = array_intersect( $user_roles, $roles );
		
		return ! empty( $intersection );
	}
}
