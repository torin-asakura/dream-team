<?php
declare(strict_types=1);

namespace TwoFAS\Light\Hooks;

use TwoFAS\Light\Authentication\Authentication;
use TwoFAS\Light\Exceptions\DateTime_Creation_Exception;
use TwoFAS\Light\Storage\Authentication_Storage;

class Delete_Authentications_Action implements Hook_Interface {

	/**
	 * @var Authentication_Storage
	 */
	private $authentication_storage;

	/**
	 * @param Authentication_Storage $authentication_storage
	 */
	public function __construct( Authentication_Storage $authentication_storage ) {
		$this->authentication_storage = $authentication_storage;
	}

	public function register_hook() {
		add_action( 'deleted_user', [ $this, 'delete_authentications' ] );
	}

	/**
	 * @param int $user_id
	 *
	 * @throws DateTime_Creation_Exception
	 */
	public function delete_authentications( int $user_id ) {
		$authentication = $this->authentication_storage->get_authentication( $user_id );

		if ( $authentication instanceof Authentication ) {
			$this->authentication_storage->close_authentication( $authentication );
		}
	}
}
