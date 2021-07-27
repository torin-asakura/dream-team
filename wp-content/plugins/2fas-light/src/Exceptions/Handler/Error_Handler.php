<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Exceptions\Handler;

use Exception;
use RuntimeException;
use UnexpectedValueException;
use Twig\Error\{LoaderError, RuntimeError, SyntaxError};
use TwoFAS\Light\Exceptions\{Authentication_Failed_Exception,
	Authentication_Not_Found_Exception,
	DB_Exception,
	Invalid_Backup_Code_Exception,
	Invalid_Totp_Token_Exception,
	Login_Token_Not_Found_Exception,
	Login_Token_Validation_Exception,
	Migration_Exception,
	Totp_Disabled_Exception,
	User_Not_Found_Exception,
	Validation_Exception};
use TwoFAS\Light\Exceptions\Http_Exception;
use TwoFAS\Light\Http\Response\{JSON_Response, View_Response};
use TwoFAS\Light\Http\Code;
use TwoFAS\Light\Notifications\Notification;
use TwoFAS\Light\Templates\Views;
use WP_Error;

class Error_Handler implements Error_Handler_Interface {

	/**
	 * @var Logger_Interface
	 */
	private $logger;

	/**
	 * @var bool
	 */
	private $logging_allowed;

	/**
	 * @var array
	 */
	private $dont_log = [
		Authentication_Not_Found_Exception::class,
		Authentication_Failed_Exception::class,
		Login_Token_Not_Found_Exception::class,
		User_Not_Found_Exception::class,
		Totp_Disabled_Exception::class,
		Invalid_Totp_Token_Exception::class,
		Invalid_Backup_Code_Exception::class,
		UnexpectedValueException::class,
		Validation_Exception::class
	];

	public function __construct( Logger_Interface $logger, bool $logging_allowed ) {
		$this->logger          = $logger;
		$this->logging_allowed = $logging_allowed;
	}

	public function capture_exception( Exception $e, array $options = [] ): Error_Handler_Interface {
		if ( $this->logging_allowed && $this->can_log( $e ) ) {
			$this->logger->capture_exception( $e, $options );
		}

		return $this;
	}

	public function to_json( Exception $e ): JSON_Response {
		$response = $this->create_response( $e );

		return new JSON_Response( [ 'error' => $response['message'] ], $response['status'] );
	}

	public function to_view( Exception $e ): View_Response {
		$response = $this->create_response( $e );

		return new View_Response( Views::ERROR, [ 'description' => $response['message'] ] );
	}

	public function to_wp_error( Exception $e ): WP_Error {
		$response = $this->create_response( $e );

		return new WP_Error( 'twofas_light_login_error', $response['message'] );
	}
	
	public function to_notification( Exception $e, string $css_class = 'notice notice-error error' ): string {
		$response = $this->create_response( $e );

		return "
		<div class='{$css_class}'>
			<p>{$response['message']}</p>
		</div>";
	}

	private function to_array( string $message, int $status ): array {
		return [
			'message' => $message,
			'status'  => $status
		];
	}

	private function can_log( Exception $e ): bool {
		foreach ( $this->dont_log as $excluded_exception ) {
			if ( $e instanceof $excluded_exception ) {
				return false;
			}
		}

		return true;
	}

	private function create_response( Exception $e ): array {
		if ( $e instanceof Authentication_Not_Found_Exception ) {
			return $this->to_array( $this->get_message_by_key( 'authentication-failed' ), Code::NOT_FOUND );
		}
		
		if ( $e instanceof Authentication_Failed_Exception ) {
			return $this->to_array( $this->get_message_by_key( 'authentication-failed' ), Code::FORBIDDEN );
		}

		if ( $e instanceof Totp_Disabled_Exception ) {
			return $this->to_array( $this->get_message_by_key( 'totp-status-disabled' ), Code::FORBIDDEN );
		}

		if ( $e instanceof User_Not_Found_Exception ) {
			return $this->to_array( $this->get_message_by_key( 'user-not-found' ), Code::NOT_FOUND );
		}
		
		if ( $e instanceof Login_Token_Not_Found_Exception ) {
			return $this->to_array( $this->get_message_by_key( 'login-token-not-found' ), Code::NOT_FOUND );
		}
		
		if ( $e instanceof Login_Token_Validation_Exception ) {
			return $this->to_array( $this->get_message_by_key( 'login-token-validation-failed' ), Code::FORBIDDEN );
		}
		
		if ( $e instanceof LoaderError ) {
			return $this->to_array( $this->get_message_by_key( 'template-not-found' ), Code::INTERNAL_SERVER_ERROR );
		}

		if ( $e instanceof SyntaxError ) {
			return $this->to_array( $this->get_message_by_key( 'template-compilation' ), Code::INTERNAL_SERVER_ERROR );
		}

		if ( $e instanceof RuntimeError ) {
			return $this->to_array( $this->get_message_by_key( 'template-rendering' ), Code::INTERNAL_SERVER_ERROR );
		}
		
		if ( $e instanceof Validation_Exception ) {
			return $this->to_array( $e->getMessage(), Code::BAD_REQUEST );
		}
		
		if ( $e instanceof UnexpectedValueException ) {
			return $this->to_array( $e->getMessage(), Code::BAD_REQUEST );
		}
		
		if ( $e instanceof DB_Exception ) {
			return $this->to_array( $e->getMessage(), Code::INTERNAL_SERVER_ERROR );
		}

		if ( $e instanceof Migration_Exception ) {
			return $this->to_array( $e->getMessage(), Code::INTERNAL_SERVER_ERROR );
		}

		if ( $e instanceof Http_Exception ) {
			return $this->to_array( $e->getMessage(), $e->getCode() );
		}

		if ( $e instanceof RuntimeException ) {
			return $this->to_array( $this->map_message( $e ), Code::INTERNAL_SERVER_ERROR );
		}

		return $this->to_array( $this->get_message_by_key( 'default' ), Code::INTERNAL_SERVER_ERROR );
	}

	private function get_message_by_key( string $key ): string {
		return Notification::get( $key );
	}

	private function map_message( Exception $e ): string {
		return Notification::get( $e->getMessage() );
	}
}
