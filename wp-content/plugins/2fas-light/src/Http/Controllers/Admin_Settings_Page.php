<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Http\Controllers;

use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\View_Response;
use TwoFAS\Light\Storage\Options_Storage;
use WP_Roles;

class Admin_Settings_Page extends Controller {
	
	/**
	 * @var Options_Storage
	 */
	private $options_storage;
	
	public function __construct( Options_Storage $options_storage ) {
		$this->options_storage = $options_storage;
	}
	
	public function show_page( Request $request ): View_Response {
		return $this->view(
			'admin_settings.html.twig',
			[
				'roles' => $this->get_role_settings()
			] );
	}
	
	private function get_role_settings(): array {
		$all_users                      = count_users( 'time', 0 );
		$wp_roles                       = $this->get_wp_roles();
		$obligatory_roles               = $this->options_storage->get_obligatory_roles();
		$remember_browser_allowed_roles = $this->options_storage->get_remember_browser_allowed_roles();
		$roles                          = [];

		foreach ( $wp_roles as $role_key => $role_name ) {
			$active_users = count(get_users(
				[
					'role'       => $role_key,
					'meta_key'   => 'twofas_light_totp_status',
					'meta_value' => 'totp_enabled'
				] ));
			
			if (array_key_exists($role_key, $all_users['avail_roles'])) {
				$inactive_users = $all_users['avail_roles'][ $role_key ] - $active_users;
			} else {
				$inactive_users = 0;
			}
			
			$roles[] = [
				'key'                           => $role_key,
				'name'                          => $role_name,
				'obligatory_role'               => in_array( $role_key, $obligatory_roles, true ),
				'remember_browser_allowed_role' => in_array( $role_key, $remember_browser_allowed_roles, true ),
				'active_users'                  => $active_users,
				'inactive_users'                => $inactive_users
			
			];
		}
		
		return $roles;
	}
	
	private function get_wp_roles(): array {
		$wp_roles = new WP_Roles();
		
		return $wp_roles->role_names;
	}
}
