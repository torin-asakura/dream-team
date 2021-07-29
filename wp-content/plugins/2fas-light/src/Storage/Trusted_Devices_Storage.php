<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Storage;

use Exception;
use TwoFAS\Light\Helpers\Hash;
use TwoFAS\Light\Http\Request\{Cookie, Request};

class Trusted_Devices_Storage {
	
	/** @var int Year in seconds */
	const COOKIE_LIFESPAN                   = 31536000;
	const TRUSTED_DEVICE_COOKIE_NAME_PREFIX = 'twofas_light_trusted_device_';
	const TWOFAS_TRUSTED_DEVICES            = 'twofas_light_trusted_devices';
	
	/**
	 * @var DB_Wrapper
	 */
	private $db;
	
	/**
	 * @var Request
	 */
	private $request;
	
	/**
	 * @var Cookie
	 */
	private $cookie;
	
	/**
	 * @param DB_Wrapper $db
	 * @param Request    $request
	 */
	public function __construct( DB_Wrapper $db, Request $request ) {
		$this->db      = $db;
		$this->request = $request;
		$this->cookie  = $request->cookie();
	}
	
	public function get_trusted_devices( int $user_id ): array {
		$trusted_devices = $this->get_all( $user_id );
		
		if ( ! is_array( $trusted_devices ) ) {
			$trusted_devices = [];
		}
		
		return $trusted_devices;
	}
	
	public function is_device_trusted( int $user_id ): bool {
		$trusted_device_id = $this->get_trusted_device_id( $user_id );
		
		return ! is_null( $trusted_device_id );
	}
	
	/**
	 * @param int $user_id
	 *
	 * @throws Exception
	 */
	public function add_trusted_device( int $user_id ) {
		$device_id    = self::TRUSTED_DEVICE_COOKIE_NAME_PREFIX . Hash::get_trusted_device_id();
		$cookie_value = Hash::get_trusted_device_id();
		
		$this->cookie->set_cookie( $device_id, $cookie_value, self::COOKIE_LIFESPAN, true );
		
		$created_at = time();
		$ip         = $this->request->get_ip();
		$user_agent = $this->request->header( 'HTTP_USER_AGENT' );
		
		$this->add( $user_id, $device_id, $cookie_value, $ip, $created_at, $user_agent );
	}
	
	public function set_trusted_device_login_time( int $user_id ) {
		$device_id = $this->get_trusted_device_id( $user_id );
		$this->update( $user_id, $device_id, time() );
	}
	
	public function remove_trusted_device( int $user_id, string $device_id ) {
		$this->cookie->delete_cookie( $device_id );
		$this->delete( $user_id, $device_id );
	}
	
	public function get_trusted_device_count( int $user_id ): int {
		$trusted_devices = $this->get_trusted_devices( $user_id );
		
		return count( $trusted_devices );
	}
	
	public function delete_trusted_devices( int $user_id ) {
		$this->delete_cookies( $user_id );
		$this->delete_from_db( $user_id );
	}
	
	/**
	 * @param int $user_id
	 *
	 * @return null|string
	 */
	private function get_trusted_device_id( int $user_id ) {
		$trusted_devices = $this->get_all( $user_id );
		
		if ( is_null( $trusted_devices ) ) {
			$trusted_devices = [];
		}
		
		foreach ( $trusted_devices as $trusted_device ) {
			$cookie_value = $this->cookie->get_cookie( $trusted_device['device_id'] );
			
			if ( $cookie_value === $trusted_device['cookie_value'] ) {
				return $trusted_device['device_id'];
			}
		}
		
		return null;
	}
	
	/**
	 * @param int $user_id
	 *
	 * @return null|array
	 */
	private function get_all( int $user_id ) {
		$table = $this->get_table_full_name( self::TWOFAS_TRUSTED_DEVICES );
		$sql   = $this->db->prepare(
			"SELECT * FROM {$table} WHERE `user_id` = %d",
			[ $user_id ]
		);
		
		return $this->db->get_results( $sql, ARRAY_A );
	}
	
	private function add(
		int $user_id,
		string $device_id,
		string $cookie_value,
		string $ip,
		int $created_at,
		string $user_agent
	) {
		$table = $this->get_table_full_name( self::TWOFAS_TRUSTED_DEVICES );
		
		$this->db->insert(
			$table,
			[
				'user_id'      => $user_id,
				'device_id'    => $device_id,
				'cookie_value' => $cookie_value,
				'ip'           => $ip,
				'created_at'   => $created_at,
				'user_agent'   => $user_agent
			],
			[ '%d', '%s', '%s', '%s', '%d', '%s' ]
		);
	}
	
	private function update( int $user_id, string $device_id, int $last_logged_in ) {
		$table = $this->get_table_full_name( self::TWOFAS_TRUSTED_DEVICES );
		
		$this->db->update(
			$table,
			[
				'last_logged_in' => $last_logged_in,
			],
			[
				'user_id'   => $user_id,
				'device_id' => $device_id
			],
			[ '%d' ],
			[ '%d', '%s' ]
		);
	}
	
	private function delete( int $user_id, string $device_id ) {
		$table = $this->get_table_full_name( self::TWOFAS_TRUSTED_DEVICES );
		
		$this->db->delete(
			$table,
			[
				'user_id'   => $user_id,
				'device_id' => $device_id
			],
			[ '%d', '%s' ]
		);
	}
	
	private function delete_cookies( int $user_id ) {
		$trusted_devices = $this->get_all( $user_id );
		
		foreach ( $trusted_devices as $trusted_device ) {
			$this->cookie->delete_cookie( $trusted_device['device_id'] );
		}
	}
	
	private function delete_from_db( int $user_id ) {
		$table = $this->get_table_full_name( self::TWOFAS_TRUSTED_DEVICES );
		
		$this->db->delete(
			$table,
			[
				'user_id' => $user_id
			],
			[ '%d' ]
		);
	}
	
	private function get_table_full_name( string $table_name ): string {
		return $this->db->get_prefix() . $table_name;
	}
}
