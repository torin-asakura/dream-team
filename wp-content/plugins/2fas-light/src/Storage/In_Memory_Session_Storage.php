<?php
declare(strict_types=1);

namespace TwoFAS\Light\Storage;

use DateInterval;
use DateTime;
use Exception;
use TwoFAS\Light\Helpers\Hash;
use TwoFAS\Light\Http\Request\Session;

class In_Memory_Session_Storage implements Session_Storage_Interface {
	
	/**
	 * @var string
	 */
	private $session_id;
	
	/**
	 * @var array
	 */
	private $sessions = [];
	
	/**
	 * @var array
	 */
	private $variables = [];
	
	/**
	 * @throws Exception
	 */
	public function __construct() {
		$this->session_id = Hash::get_session_id();
	}
	
	public function get_session_id(): string {
		return $this->session_id;
	}
	
	public function exists(): bool {
		return array_key_exists( $this->session_id, $this->sessions );
	}
	
	/**
	 * @throws Exception
	 */
	public function refresh() {
		$this->sessions[ $this->session_id ]['expiry_date'] = $this->get_expiry_date();
	}
	
	/**
	 * @return array|null
	 */
	public function get_session() {
		if ( ! $this->exists() ) {
			return null;
		}
		
		return $this->sessions[ $this->session_id ];
	}
	
	/**
	 * @throws Exception
	 */
	public function add_session() {
		$expire = $this->get_expiry_date();
		
		$this->sessions[ $this->session_id ] = [
			'session_id'  => $this->session_id,
			'expiry_date' => $expire
		];
	}
	
	public function delete_session() {
		unset( $this->sessions[ $this->session_id ] );
		unset( $this->variables[ $this->session_id ] );
	}
	
	/**
	 * @throws Exception
	 */
	public function delete_expired_sessions() {
		$now = new DateTime();
		
		foreach ( $this->sessions as $session_id => $session ) {
			if ( $session['expiry_date'] < $now ) {
				unset( $this->sessions[ $session_id ] );
			}
		}
	}
	
	public function variable_exists( string $key ): bool {
		if ( ! array_key_exists( $this->session_id, $this->variables ) ) {
			return false;
		}
		
		if ( ! array_key_exists( $key, $this->variables[ $this->session_id ] ) ) {
			return false;
		}
		
		return true;
	}
	
	/**
	 * @param string $key
	 *
	 * @return string|null
	 */
	public function get_variable( string $key ) {
		
		if ( ! $this->variable_exists( $key ) ) {
			return null;
		}
		
		return $this->variables[ $this->session_id ][ $key ];
	}
	
	public function add_variable( string $key, string $value ) {
		$this->variables[ $this->session_id ] [ $key ] = $value;
	}
	
	public function update_variable( string $key, string $value ) {
		$this->add_variable( $key, $value );
	}
	
	public function delete_variable( string $key ) {
		unset( $this->variables[ $this->session_id ][ $key ] );
	}
	
	/**
	 * @return DateTime
	 *
	 * @throws Exception
	 */
	private function get_expiry_date(): DateTime {
		$now = new DateTime();
		
		return $now->add( new DateInterval( 'PT' . Session::ONE_HOUR_IN_SECONDS . 'S' ) );
	}
}
