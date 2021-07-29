<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Middleware;

use TwoFAS\Light\Exceptions\User_Not_Found_Exception;
use TwoFAS\Light\Helpers\Flash;
use TwoFAS\Light\Http\{Action_Index, Action_URL, Code};
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\{JSON_Response, Redirect_Response, View_Response};
use TwoFAS\Light\Notifications\Notification;
use TwoFAS\Light\Storage\User_Storage;

class Check_Totp_Enabled extends Middleware {
	
	/**
	 * @var Request
	 */
	private $request;
	
	/**
	 * @var Flash
	 */
	private $flash;
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @param Request      $request
	 * @param Flash        $flash
	 * @param User_Storage $user_storage
	 */
	public function __construct( Request $request, Flash $flash, User_Storage $user_storage ) {
		$this->request      = $request;
		$this->flash        = $flash;
		$this->user_storage = $user_storage;
	}
	
	/**
	 * @return JSON_Response|Redirect_Response|View_Response
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function handle() {
		if ( ! $this->user_storage->is_totp_enabled() ) {
			if ( $this->request->is_ajax() ) {
				return $this->json(
					[
						'error' => Notification::get( 'totp-status-disabled' ),
					],
					Code::FORBIDDEN );
			}
			
			$this->flash->add_message( 'error', 'totp-status-disabled' );
			
			return $this->redirect( new Action_URL( Action_Index::TWOFAS_ACTION_DEFAULT ) );
		}
		
		return $this->next->handle();
	}
}
