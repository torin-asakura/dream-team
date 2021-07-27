<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Http\Controllers;

use TwoFAS\Light\Events\Totp_Configuration_Removed;
use TwoFAS\Light\Helpers\Dispatcher;
use TwoFAS\Light\Http\{Action_Index, Action_URL};
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\Redirect_Response;
use TwoFAS\Light\Storage\User_Storage;

class Remove_Configuration extends Controller {
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @param User_Storage $user_storage
	 */
	public function __construct( User_Storage $user_storage ) {
		$this->user_storage = $user_storage;
	}
	
	public function remove( Request $request ): Redirect_Response {
		Dispatcher::dispatch( new Totp_Configuration_Removed( $this->user_storage->get_user_id() ) );
		
		return new Redirect_Response( new Action_URL( Action_Index::TWOFAS_PERSONAL_SETTINGS ) );
	}
}
