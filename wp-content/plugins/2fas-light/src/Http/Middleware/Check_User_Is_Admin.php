<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Http\Middleware;

use TwoFAS\Light\Helpers\Flash;
use TwoFAS\Light\Http\Action_Index;
use TwoFAS\Light\Http\Action_URL;
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\{JSON_Response, Redirect_Response};
use TwoFAS\Light\Notifications\Notification;
use TwoFAS\Light\User\Capabilities;

class Check_User_Is_Admin extends Middleware {
	
	/**
	 * @var Request
	 */
	private $request;
	
	/**
	 * @var Flash
	 */
	private $flash;
	
	/**
	 * @param Request $request
	 * @param Flash   $flash
	 */
	public function __construct( Request $request, Flash $flash ) {
		$this->request = $request;
		$this->flash   = $flash;
	}
	
	/**
	 * @inheritDoc
	 */
	public function handle() {
		if ( ! current_user_can( Capabilities::ADMIN ) ) {
			$message = Notification::get( 'forbidden' );
			
			if ( $this->request->is_ajax() ) {
				return $this->json(
					[
						'error' => $message,
					],
					Code::FORBIDDEN );
			}
			
			$this->flash->add_message( 'error', $message );
			
			return $this->redirect( new Action_URL( Action_Index::TWOFAS_PERSONAL_SETTINGS ) );
		}
		
		return $this->next->handle();
	}
}
