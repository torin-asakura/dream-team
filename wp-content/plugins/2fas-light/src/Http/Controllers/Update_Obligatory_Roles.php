<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Http\Controllers;

use TwoFAS\Light\Exceptions\Validation_Exception;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\JSON_Response;
use TwoFAS\Light\Storage\Options_Storage;
use WP_Roles;

class Update_Obligatory_Roles extends Controller {
	
	/**
	 * @var Options_Storage
	 */
	private $options_storage;
	
	/**
	 * @param Options_Storage $options_storage
	 */
	public function __construct( Options_Storage $options_storage ) {
		$this->options_storage = $options_storage;
	}
	
	public function update( Request $request ): JSON_Response {
		$roles = $request->post( 'obligatory_roles' );
		
		if ( ! is_array( $roles ) ) {
			$roles = [];
		}
		
		if ( ! $this->validate_roles( $roles ) ) {
			throw new Validation_Exception( __( 'Invalid role has been sent.', '2fas-light' ) );
		}
		
		$this->options_storage->set_obligatory_roles( $roles );
		
		return $this->json( [] );
	}
	
	/**
	 * @param array $roles
	 *
	 * @return bool
	 */
	private function validate_roles( array $roles ): bool {
		if ( empty( $roles ) ) {
			return true;
		}
		
		$wp_roles = array_keys( (new WP_Roles())->role_names );
		$diff     = array_diff( $roles, $wp_roles );
		
		return empty( $diff );
	}
}
