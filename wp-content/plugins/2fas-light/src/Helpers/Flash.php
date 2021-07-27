<?php
declare(strict_types=1);

namespace TwoFAS\Light\Helpers;

use TwoFAS\Light\Exceptions\Invalid_Flash_Message_Type_Exception;
use TwoFAS\Light\Http\Request\Cookie;

class Flash {
	
	const ONE_MINUTE_IN_SECONDS = 60;
	const TWOFAS_LIGHT_MESSAGES = 'twofas_light_messages';
	
	/**
	 * @var Cookie
	 */
	private $cookie;
	
	/**
	 * @var array
	 */
	private $messages;
	
	/**
	 * @param Cookie $cookie
	 */
	public function __construct( Cookie $cookie ) {
		$this->cookie   = $cookie;
		$this->messages = $this->fetch_messages();
	}
	
	public function get_messages( string $type ): array {
		if ( ! array_key_exists( $type, $this->messages ) ) {
			return [];
		}
		
		return $this->messages[ $type ];
	}
	
	/**
	 * @param string $type
	 * @param string $message
	 *
	 * @throws Invalid_Flash_Message_Type_Exception
	 */
	public function add_message_now( string $type, string $message ) {
		$this->validate_type( $type );
		$this->messages[ $type ][] = $message;
	}
	
	/**
	 * @param string $type
	 * @param string $message
	 *
	 * @throws Invalid_Flash_Message_Type_Exception
	 */
	public function add_message( string $type, string $message ) {
		$this->add_message_now( $type, $message );
		$message_key = array_search( $message, $this->messages[ $type ] );
		$cookie_name = $this->create_cookie_name( $type, $message_key );
		$this->cookie->set_cookie( $cookie_name, $message, self::ONE_MINUTE_IN_SECONDS );
	}
	
	private function fetch_messages(): array {
		$cookie_messages = $this->cookie->get_cookie( self::TWOFAS_LIGHT_MESSAGES );
		
		if ( ! is_array( $cookie_messages ) ) {
			return [];
		}
		
		return $this->group_messages_by_type( $cookie_messages );
	}
	
	private function group_messages_by_type( array $cookie_messages ): array {
		$messages = [];
		
		foreach ( $cookie_messages as $type => $group ) {
			foreach ( $group as $key => $message ) {
				$cookie_name = $this->create_cookie_name( $type, $key );
				$this->cookie->delete_cookie( $cookie_name );
				$messages[ $type ][] = $message;
			}
		}
		
		return $messages;
	}
	
	private function create_cookie_name( string $type, int $key ): string {
		return self::TWOFAS_LIGHT_MESSAGES . '[' . $type . ']' . '[' . $key . ']';
	}
	
	/**
	 * @param string $type
	 *
	 * @throws Invalid_Flash_Message_Type_Exception
	 */
	private function validate_type( string $type ) {
		$allowed_types = [ 'success', 'error', 'warning' ];
		
		if ( ! in_array( $type, $allowed_types ) ) {
			throw new Invalid_Flash_Message_Type_Exception(
				'There are only 2 allowed flash message types: success and error.'
			);
		}
	}
}
