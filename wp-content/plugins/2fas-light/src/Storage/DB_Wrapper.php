<?php
declare(strict_types=1);

namespace TwoFAS\Light\Storage;

use wpdb;

class DB_Wrapper {

	/**
	 * @var wpdb
	 */
	private $wpdb;

	/**
	 * @param wpdb $wpdb
	 */
	public function __construct( wpdb $wpdb ) {
		$this->wpdb = $wpdb;
	}
	
	public function get_prefix(): string {
		return $this->wpdb->base_prefix;
	}
	
	public function get_last_error(): string {
		return $this->protect_prefix( $this->wpdb->last_error );
	}

	/**
	 * @param string $query
	 *
	 * @return string|null
	 */
	public function get_var( string $query ) {
		return $this->wpdb->get_var( $query );
	}

	/**
	 * @param string $query
	 * @param string $output
	 *
	 * @return array|object|null
	 */
	public function get_row( string $query, string $output = OBJECT ) {
		return $this->wpdb->get_row( $query, $output );
	}
	
	public function get_col( string $query ): array {
		return $this->wpdb->get_col( $query );
	}

	/**
	 * @param string $sql
	 * @param string $output
	 *
	 * @return array|null
	 */
	public function get_results( string $sql, string $output = OBJECT ) {
		return $this->wpdb->get_results( $sql, $output );
	}

	/**
	 * @param string            $table_name
	 * @param array             $data
	 * @param array|string|null $format
	 *
	 * @return false|int
	 */
	public function insert( string $table_name, array $data, $format = null ) {
		return $this->wpdb->insert( $table_name, $data, $format );
	}

	/**
	 * @param string            $table_name
	 * @param array             $data
	 * @param array             $where
	 * @param array|string|null $data_format
	 * @param array|string|null $where_format
	 *
	 * @return false|int
	 */
	public function update( string $table_name, array $data, array $where, $data_format = null, $where_format = null ) {
		return $this->wpdb->update( $table_name, $data, $where, $data_format, $where_format );
	}

	/**
	 * @param string            $table_name
	 * @param array             $where
	 * @param array|string|null $where_format
	 *
	 * @return false|int
	 */
	public function delete( string $table_name, array $where, $where_format = null ) {
		return $this->wpdb->delete( $table_name, $where, $where_format );
	}

	/**
	 * @param string $sql
	 *
	 * @return bool|int
	 */
	public function query( string $sql ) {
		return $this->wpdb->query( $sql );
	}

	/**
	 * @param string $sql
	 * @param array  $args
	 *
	 * @return string
	 */
	public function prepare( string $sql, array $args ): string {
		return $this->wpdb->prepare( $sql, $args );
	}
	
	public function get_charset_collate(): string {
		return $this->wpdb->get_charset_collate();
	}
	
	public function usermeta(): string {
		return $this->wpdb->usermeta;
	}
	
	private function protect_prefix( string $message ): string {
		return str_replace( $this->get_prefix(), '{prefix}', $message );
	}
}
