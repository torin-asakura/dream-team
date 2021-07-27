<?php

namespace TwoFAS\Light\Storage;

interface Session_Storage_Interface {
	
	/**
	 * @return string
	 */
	public function get_session_id(): string;
	
	public function exists(): bool;
	
	public function refresh();
	
	/**
	 * @return array|null
	 */
	public function get_session();
	
	public function add_session();
	
	public function delete_session();
	
	public function delete_expired_sessions();
	
	public function variable_exists( string $key ): bool;
	
	/**
	 * @param string $key
	 *
	 * @return string|null
	 */
	public function get_variable( string $key );
	
	public function add_variable( string $key, string $value );
	
	public function update_variable( string $key, string $value );
	
	public function delete_variable( string $key );
}
