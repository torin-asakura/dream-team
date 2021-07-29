<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Controllers;

use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\JSON_Response;
use TwoFAS\Light\Storage\User_Storage;

class Enable_Totp extends Controller {

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

	public function enable( Request $request ): JSON_Response {
		$this->user_storage->enable_totp();
		
		return $this->json(
			[
				'twofas_light_totp_status' => $this->user_storage->get_totp_status()
			] );
	}
}
