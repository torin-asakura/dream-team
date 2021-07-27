<?php
declare(strict_types=1);

namespace TwoFAS\Light\Update;

use DirectoryIterator;
use LogicException;
use TwoFAS\Light\Storage\{DB_Wrapper, Storage};
use TwoFAS\Light\Exceptions\{DB_Exception, Migration_Exception};

class Migrator {
	
	const TABLE_MIGRATION = 'twofas_light_migrations';
	
	/**
	 * @var DB_Wrapper
	 */
	private $db;
	
	/**
	 * @var Plugin_Version
	 */
	private $plugin_version;
	
	/**
	 * @var Storage
	 */
	private $storage;
	
	/**
	 * @var string
	 */
	private $migrations_path;
	
	/**
	 * @param DB_Wrapper     $db
	 * @param Plugin_Version $plugin_version
	 * @param Storage        $storage
	 */
	public function __construct( DB_Wrapper $db, Plugin_Version $plugin_version, Storage $storage ) {
		$this->db              = $db;
		$this->plugin_version  = $plugin_version;
		$this->storage         = $storage;
		$this->migrations_path = __DIR__ . '/Migrations';
	}
	
	public function set_migrations_path( string $migrations_path ) {
		$this->migrations_path = $migrations_path;
	}
	
	/**
	 * @throws Migration_Exception
	 * @throws DB_Exception
	 * @throws LogicException
	 */
	public function migrate() {
		$db_plugin_version = $this->plugin_version->get_db_version();
		$migrations        = array_diff( $this->get_migrations(), $this->get_executed_migrations() );
		
		sort( $migrations );
		
		foreach ( $migrations as $name ) {
			$migration_name = $this->get_fully_qualified_name( $name );
			
			/** @var Migration_Interface $migration */
			$migration = new $migration_name( $this->db, $this->storage );
			
			if ( ! ( $migration instanceof Migration_Interface ) ) {
				throw new LogicException( 'Migration should be instance of Migration_Interface' );
			}
			
			if ( $migration->supports( $db_plugin_version ) ) {
				$migration->up();
			}
			
			$this->add_migration( $name );
		}
	}
	
	/**
	 * @throws Migration_Exception
	 */
	public function rollback_all() {
		$migrations = $this->get_executed_migrations();
		
		rsort( $migrations );
		
		foreach ( $migrations as $name ) {
			$migration_name = $this->get_fully_qualified_name( $name );
			
			/** @var Migration_Interface $migration */
			$migration = new $migration_name( $this->db, $this->storage );
			
			if ( $migration instanceof Rollback_Migration ) {
				$migration->down();
			}
		}
	}
	
	private function check_migration_table(): bool {
		$table_exist = $this->db->get_var( "SHOW TABLES LIKE '" . $this->get_migration_table_name() . "' " );
		
		return ! is_null( $table_exist );
	}
	
	private function get_migrations(): array {
		$migrations = [];
		
		foreach ( new DirectoryIterator( $this->migrations_path ) as $migration ) {
			if ( $migration->isDot() ) {
				continue;
			}
			
			$filename = $migration->getFilename();
			
			if ( ! preg_match( '/^Migration_\d{4}_\d{2}_\d{2}(_[a-zA-Z]+)+\.php$/', $filename ) ) {
				continue;
			}
			
			$migrations[] = str_replace( '.php', '', $filename );
		}
		
		return $migrations;
	}
	
	private function get_executed_migrations(): array {
		if ( ! $this->check_migration_table() ) {
			return [];
		}
		
		return $this->db->get_col( "SELECT migration FROM " . $this->get_migration_table_name() . " " );
	}
	
	/**
	 * @param string $migration_name
	 *
	 * @throws DB_Exception
	 */
	private function add_migration( string $migration_name ) {
		$result = $this->db->insert(
			$this->get_migration_table_name(),
			[
				'migration' => $migration_name
			] );
		
		if ( $result === false ) {
			throw new DB_Exception( $this->db->get_last_error() );
		}
	}
	
	private function get_fully_qualified_name( string $migration_name ): string {
		return 'TwoFAS\\Light\\Update\\Migrations\\' . $migration_name;
	}
	
	private function get_migration_table_name(): string {
		return $this->db->get_prefix() . self::TABLE_MIGRATION;
	}
}
