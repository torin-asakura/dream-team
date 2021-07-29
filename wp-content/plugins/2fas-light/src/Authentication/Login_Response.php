<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Authentication;

use Exception;
use TwoFAS\Light\Core\Plugin;
use TwoFAS\Light\Exceptions\Handler\Error_Handler_Interface;
use TwoFAS\Light\Helpers\Flash;
use TwoFAS\Light\Http\{Code, Direct_URL, Request\Request};
use TwoFAS\Light\Http\Response\{JSON_Response, Redirect_Response, Safe_Redirect_Response, View_Response, Not_Handled_Response};
use TwoFAS\Light\Templates\Twig;
use WP_Error;
use WP_User;

class Login_Response {
	
	/**
	 * @var WP_User|WP_Error|null
	 */
	private $response;
	
	/**
	 * @var Error_Handler_Interface
	 */
	private $error_handler;
	
	/**
	 * @var Request
	 */
	private $request;
	
	/**
	 * @var Flash
	 */
	private $flash;
	
	/**
	 * @var Twig
	 */
	private $twig;
	
	/**
	 * @param Request                 $request
	 * @param Flash                   $flash
	 * @param Twig                    $twig
	 * @param Error_Handler_Interface $error_handler
	 */
	public function __construct( Request $request, Flash $flash, Twig $twig, Error_Handler_Interface $error_handler ) {
		$this->request       = $request;
		$this->flash         = $flash;
		$this->twig          = $twig;
		$this->error_handler = $error_handler;
	}
	
	/**
	 * @param JSON_Response|Redirect_Response|View_Response|Not_Handled_Response|null $response
	 *
	 * @return WP_Error|WP_User|void
	 */
	public function process( $response ) {
		if ( $this->should_response_be_changed( $response ) ) {
			$this->flash->add_message( 'error', $response->get_body()['error'] );
			$response = $this->safe_redirect();
		}
		
		if ( $response instanceof JSON_Response ) {
			$status_code = $response->get_status_code();
			$body        = $response->get_body();
			
			if ( Code::OK === $status_code ) {
				$this->response = new WP_User( $body['user_id'] );
			} else {
				$this->response = $this->error( $body['error'] );
			}
		}
		
		if ( $response instanceof Redirect_Response ) {
			$response->redirect();
		}
		
		if ( $response instanceof View_Response ) {
			try {
				echo $this->twig->try_render( $response->get_template(), $response->get_data() );
				Plugin::terminate();
			} catch ( Exception $e ) {
				return $this->error_handler->capture_exception( $e )->to_wp_error( $e );
			}
		}
	}
	
	public function should_response_be_returned(): bool {
		return ! is_null( $this->response );
	}
	
	/**
	 * @return WP_Error|WP_User|null
	 */
	public function get_response() {
		return $this->response;
	}
	
	private function should_response_be_changed( $response ): bool {
		return $this->is_jetpack_sso_login()
		       && $response instanceof JSON_Response
		       && Code::OK !== $response->get_status_code();
	}
	
	private function is_jetpack_sso_login(): bool {
		return did_action( 'jetpack_sso_handle_login' ) > 0;
	}
	
	private function safe_redirect(): Safe_Redirect_Response {
		$login_url     = wp_login_url();
		$interim_login = $this->request->request( 'interim-login' );
		
		if ( $interim_login ) {
			$login_url = add_query_arg( 'interim-login', '1', $login_url );
		}
		
		return new Safe_Redirect_Response( new Direct_URL ( $login_url ) );
	}
	
	private function error( string $message ): WP_Error {
		return new WP_Error( 'twofas_light_login_error', $message );
	}
}
