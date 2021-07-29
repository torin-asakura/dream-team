<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Middleware;

use TwoFAS\Light\Helpers\Flash;
use TwoFAS\Light\Http\Action_URL;
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Http\Request\Request;

class Check_Nonce extends Middleware {
	
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
		$action = $this->request->action();
		$nonce  = $this->request->get_nonce();
		
		if ( ! $this->request->is_post() ) {
			return $this->next->handle();
		}
		
		if ( $this->request->is_ajax() ) {
			if ( ! $this->check_ajax_nonce() ) {
				return $this->json( [ 'error' => 'Security token is invalid.', ], Code::FORBIDDEN );
			}
		} elseif ( ! $this->check_nonce( $nonce, $action ) ) {
			$this->flash->add_message( 'error', 'csrf' );
			
			return $this->redirect( new Action_URL( $this->request->page(), $this->request->referer_action() ) );
		}
		
		
		return $this->next->handle();
	}
	
	private function check_nonce( string $nonce, string $action ): bool {
		return false !== wp_verify_nonce( $nonce, $action );
	}
	
	
	private function check_ajax_nonce(): bool {
		return false !== check_ajax_referer( 'twofas_light_ajax', 'security' );
	}
}
