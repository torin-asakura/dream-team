<?php
declare(strict_types=1);

namespace TwoFAS\Light\Update;

use TwoFAS\Light\Storage\DB_Wrapper;
use TwoFAS\Light\Storage\Storage;

abstract class Migration implements Migration_Interface {

	/**
	 * @var DB_Wrapper
	 */
	protected $db;

	/**
	 * @var Storage
	 */
	protected $storage;

	/**
	 * @var array
	 */
	protected $tables = [];
	
	public function __construct( DB_Wrapper $db, Storage $storage ) {
		$this->db      = $db;
		$this->storage = $storage;

		$this->set_table_full_names();
	}

	public function supports( string $version ): bool {
		return $this->run_always();
	}

	abstract protected function introduced(): string;

	protected function run_always(): bool {
		return true;
	}

	protected function do_not_run_on_fresh_install( string $version ): bool {
		return version_compare( $version, '0', '>' )
		       && version_compare( $version, $this->introduced(), '<' );
	}

	protected function get_table_full_name( string $table_name ): string {
		return str_replace( '{prefix}', $this->db->get_prefix(), $table_name );
	}

	protected function set_table_full_names() {
		foreach ( $this->tables as $table_key => $table_name ) {
			$this->tables[ $table_key ] = $this->get_table_full_name( $table_name );
		}
	}
}
