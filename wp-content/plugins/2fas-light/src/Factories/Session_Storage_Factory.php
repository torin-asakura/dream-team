<?php
declare(strict_types=1);

namespace TwoFAS\Light\Factories;

use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Storage\{DB_Session_Storage, In_Memory_Session_Storage, Session_Storage_Interface};
use TwoFAS\Light\Storage\DB_Wrapper;

class Session_Storage_Factory {

	/**
	 * @var DB_Wrapper
	 */
	private $db;

	/**
	 * @var Request
	 */
	private $request;

	/**
	 * @param DB_Wrapper $db
	 * @param Request    $request
	 */
	public function __construct( DB_Wrapper $db, Request $request ) {
		$this->db      = $db;
		$this->request = $request;
	}

	/**
	 * @return Session_Storage_Interface
	 */
	public function create() {
		if ( $this->can_use_db_session_storage() ) {
			return new DB_Session_Storage( $this->request->cookie(), $this->db );
		}

		return new In_Memory_Session_Storage();
	}
	
	private function can_use_db_session_storage(): bool {
		return $this->tables_exist();
	}
	
	private function tables_exist(): bool {
		$table_sessions          = $this->get_table_full_name( DB_Session_Storage::TABLE_SESSIONS );
		$table_session_variables = $this->get_table_full_name( DB_Session_Storage::TABLE_SESSION_VARIABLES );

		$result1 = $this->db->get_var( "SHOW TABLES LIKE '{$table_sessions}'" );
		$result2 = $this->db->get_var( "SHOW TABLES LIKE '{$table_session_variables}'" );

		return ! is_null( $result1 ) && ! is_null( $result2 );
	}
	
	private function get_table_full_name( string $table_name ): string {
		return $this->db->get_prefix() . $table_name;
	}
}
