<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Storage;

use DateTime;
use TwoFAS\Light\Exceptions\{Rate_Plugin_Countdown_Never_Started_Exception, User_Not_Found_Exception};
use WP_User;

class User_Storage {
	
	const TOTP_SECRET                            = 'twofas_light_totp_secret';
	const TOTP_SECRET_UPDATE_DATE                = 'twofas_light_totp_secret_update_date';
	const STEP_TOKEN                             = 'twofas_light_step_token';
	const USER_BLOCKED_UNTIL                     = 'twofas_light_user_blocked_until';
	const USER_LAST_LOGIN_TIME                   = 'twofas_light_last_login_time';
	const BACKUP_CODES                           = 'twofas_light_backup_codes';
	const RATE_PROMPT_COUNTDOWN_START_FIELD_NAME = 'twofas_light_rate_prompt_countdown_start';
	const USER_HID_RATE_PLUGIN_PROMPT            = 'twofas_light_hid_rate_plugin_prompt';
	const TOTP_STATUS                            = 'twofas_light_totp_status';
	const METHOD_NOT_CONFIGURED                  = 'totp_not_configured';
	const METHOD_CONFIGURED_DISABLED             = 'totp_disabled';
	const METHOD_CONFIGURED_ENABLED              = 'totp_enabled';
	const USER_LOGIN_BLOCK_TIME_IN_MINUTES       = 5;
	
	/**
	 * @var array
	 */
	private $wp_user_meta = [
		self::TOTP_SECRET,
		self::TOTP_SECRET_UPDATE_DATE,
		self::TOTP_STATUS,
		self::STEP_TOKEN,
		self::USER_BLOCKED_UNTIL,
		self::USER_LAST_LOGIN_TIME,
		self::BACKUP_CODES,
		self::RATE_PROMPT_COUNTDOWN_START_FIELD_NAME,
		self::USER_HID_RATE_PLUGIN_PROMPT
	];
	
	/**
	 * @var DB_Wrapper
	 */
	private $db;
	
	/**
	 * @var WP_User|null
	 */
	private $wp_user;
	
	/**
	 * @param DB_Wrapper $db
	 */
	public function __construct( DB_Wrapper $db ) {
		$this->db = $db;
	}
	
	public function get_wp_user_meta(): array {
		return $this->wp_user_meta;
	}
	
	public function set_wp_user( WP_User $user ) {
		$this->wp_user = $user;
	}
	
	public function reset_wp_user() {
		$this->wp_user = null;
	}
	
	/**
	 * @return WP_User
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function get_wp_user(): WP_User {
		if ( ! $this->is_wp_user_set() ) {
			throw new User_Not_Found_Exception();
		}
		
		return $this->wp_user;
	}
	
	public function is_wp_user_set(): bool {
		return $this->wp_user instanceof WP_User;
	}
	
	/**
	 * @return int
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function get_user_id(): int {
		return $this->get_wp_user()->ID;
	}
	
	/**
	 * @return string
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function get_email(): string {
		return $this->get_wp_user()->user_email;
	}
	
	/**
	 * @return array
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function get_roles(): array {
		$wp_user = $this->get_wp_user();
		
		return $wp_user->roles;
	}
	
	/**
	 * @return bool
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function is_totp_enabled(): bool {
		$method_status = $this->get_totp_status();
		
		return $this->is_auth_method_enabled( $method_status );
	}
	
	/**
	 * @return bool
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function is_totp_configured(): bool {
		$totp_status = $this->get_totp_status();
		
		return $this->is_auth_method_configured( $totp_status );
	}
	
	/**
	 * @throws User_Not_Found_Exception
	 */
	public function enable_totp() {
		$this->set_auth_method_status( self::TOTP_STATUS, self::METHOD_CONFIGURED_ENABLED );
	}
	
	/**
	 * @throws User_Not_Found_Exception
	 */
	public function disable_totp() {
		$this->set_auth_method_status( self::TOTP_STATUS, self::METHOD_CONFIGURED_DISABLED );
	}
	
	/**
	 * @throws User_Not_Found_Exception
	 */
	public function remove_totp() {
		$this->set_auth_method_status( self::TOTP_STATUS, self::METHOD_NOT_CONFIGURED );
	}
	
	/**
	 * @param string $totp_secret
	 */
	public function set_totp_secret( string $totp_secret ) {
		$this->set_user_meta( self::TOTP_SECRET, $totp_secret );
	}
	
	/**
	 * @return string|null
	 */
	public function get_totp_secret() {
		return $this->get_user_meta( self::TOTP_SECRET );
	}
	
	public function delete_totp_secret() {
		$this->delete_user_meta( self::TOTP_SECRET );
	}
	
	/**
	 * @return DateTime|null
	 */
	public function get_totp_secret_update_date() {
		$date = $this->get_user_meta( self::TOTP_SECRET_UPDATE_DATE );
		if ( empty( $date ) ) {
			return null;
		}
		$datetime = DateTime::createFromFormat( DateTime::ISO8601, $date );
		
		return ( $datetime instanceof DateTime ) ? $datetime : null;
	}
	
	public function update_totp_secret_date( DateTime $date_time ) {
		$date = $date_time->format( DateTime::ISO8601 );
		$this->set_user_meta( self::TOTP_SECRET_UPDATE_DATE, $date );
	}
	
	/**
	 * @param string $token
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function set_step_token( string $token ) {
		$this->set_user_meta( self::STEP_TOKEN, $token );
	}
	
	/**
	 * @return string|null
	 */
	public function get_step_token() {
		return $this->get_user_meta( self::STEP_TOKEN );
	}
	
	/**
	 * @throws User_Not_Found_Exception
	 */
	public function delete_step_token() {
		$this->delete_user_meta( self::STEP_TOKEN );
	}
	
	/**
	 * @throws User_Not_Found_Exception
	 */
	public function block_user() {
		$this->set_user_meta( self::USER_BLOCKED_UNTIL, time() + ( self::USER_LOGIN_BLOCK_TIME_IN_MINUTES * 60 ) );
	}
	
	/**
	 * @return bool
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function is_user_blocked(): bool {
		$blocked_until = $this->get_user_meta( self::USER_BLOCKED_UNTIL );
		
		return time() < ( (int) $blocked_until );
	}
	
	/**
	 * @return null|string
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function get_last_login_time() {
		return $this->get_user_meta( self::USER_LAST_LOGIN_TIME );
	}
	
	/**
	 * @param int $time
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function set_last_login_time( int $time ) {
		$this->set_user_meta( self::USER_LAST_LOGIN_TIME, $time );
	}
	
	public function is_rate_plugin_prompt_hidden(): bool {
		return (bool) $this->get_user_meta( self::USER_HID_RATE_PLUGIN_PROMPT );
	}
	
	public function set_rate_plugin_prompt_hidden() {
		$this->set_user_meta( self::USER_HID_RATE_PLUGIN_PROMPT, 1 );
	}
	
	public function set_backup_codes( array $backup_codes ) {
		$this->set_user_meta( self::BACKUP_CODES, $backup_codes );
	}
	
	/**
	 * @return array|string|null
	 */
	public function get_backup_codes() {
		return $this->get_user_meta( self::BACKUP_CODES );
	}
	
	public function have_backup_codes(): bool {
		$backup_codes = $this->get_backup_codes();
		
		if ( ! is_array( $backup_codes ) ) {
			$backup_codes = [];
		}
		
		return count( $backup_codes ) > 0;
	}
	
	/**
	 * @return array|string|null
	 *
	 * @throws Rate_Plugin_Countdown_Never_Started_Exception
	 */
	public function get_rate_prompt_countdown_start_timestamp() {
		$countdown_start_timestamp = $this->get_user_meta( self::RATE_PROMPT_COUNTDOWN_START_FIELD_NAME );
		
		if ( null === $countdown_start_timestamp || ! ctype_digit( $countdown_start_timestamp ) ) {
			throw new Rate_Plugin_Countdown_Never_Started_Exception();
		}
		
		return $countdown_start_timestamp;
	}
	
	public function update_rate_prompt_countdown_start_date( DateTime $date ) {
		$this->set_user_meta( self::RATE_PROMPT_COUNTDOWN_START_FIELD_NAME, $date->getTimestamp() );
	}
	
	public function delete_wp_user_meta() {
		$users = get_users();
		
		foreach ( $users as $user ) {
			foreach ( $this->wp_user_meta as $user_meta ) {
				delete_user_meta( $user->ID, $user_meta );
			}
		}
	}
	
	/**
	 * @return array|string|null
	 *
	 * @throws User_Not_Found_Exception
	 */
	public function get_totp_status() {
		$method_status = $this->get_user_meta( self::TOTP_STATUS );
		
		if ( ! is_string( $method_status ) || empty( $method_status ) ) {
			$method_status = self::METHOD_NOT_CONFIGURED;
		}
		
		return $method_status;
	}
	
	private function is_auth_method_enabled( string $method_status ): bool {
		return self::METHOD_CONFIGURED_ENABLED === $method_status;
	}
	
	private function is_auth_method_configured( string $method_status ): bool {
		return self::METHOD_CONFIGURED_ENABLED === $method_status
		       || self::METHOD_CONFIGURED_DISABLED === $method_status;
	}
	
	/**
	 * @param string $method_key
	 * @param string $status
	 *
	 * @throws User_Not_Found_Exception
	 */
	private function set_auth_method_status( string $method_key, string $status ) {
		$this->set_user_meta( $method_key, $status );
	}
	
	/**
	 * @param string $meta_key
	 *
	 * @return array|string|null
	 *
	 * @throws User_Not_Found_Exception
	 */
	private function get_user_meta( string $meta_key ) {
		$meta_value = get_user_meta( $this->get_user_id(), $meta_key, true );
		
		if ( empty( $meta_value ) ) {
			return null;
		}
		
		return $meta_value;
	}
	
	/**
	 * @param string           $meta_key
	 * @param array|int|string $meta_value
	 *
	 * @throws User_Not_Found_Exception
	 */
	private function set_user_meta( string $meta_key, $meta_value ) {
		update_user_meta( $this->get_user_id(), $meta_key, $meta_value );
	}
	
	/**
	 * @param string $meta_key
	 *
	 * @throws User_Not_Found_Exception
	 */
	private function delete_user_meta( string $meta_key ) {
		delete_user_meta( $this->get_user_id(), $meta_key );
	}
}
