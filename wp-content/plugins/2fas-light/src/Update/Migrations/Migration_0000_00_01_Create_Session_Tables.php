<?php
declare(strict_types=1);

namespace TwoFAS\Light\Update\Migrations;

use TwoFAS\Light\Exceptions\Migration_Exception;
use TwoFAS\Light\Update\{Migration, Rollback_Migration};

class Migration_0000_00_01_Create_Session_Tables extends Migration implements Rollback_Migration {
	
	const TABLE_SESSIONS          = 'sessions';
	const TABLE_SESSION_VARIABLES = 'session_variables';
	
	/**
	 * @var array
	 */
	protected $tables = [
		self::TABLE_SESSIONS          => '{prefix}twofas_light_sessions',
		self::TABLE_SESSION_VARIABLES => '{prefix}twofas_light_session_variables',
	];
	
	/**
	 * @codeCoverageIgnore
	 */
	protected function introduced(): string {
		return '3.0.0';
	}
	
	/**
	 * @throws Migration_Exception
	 */
	public function up() {
		$charset_collate = $this->db->get_charset_collate();
		
		$sql = "CREATE TABLE IF NOT EXISTS {$this->tables[ self::TABLE_SESSIONS ]} (
session_id varchar(32),
expiry_date bigint(20) NOT NULL,
PRIMARY KEY (session_id)
) ENGINE = INNODB {$charset_collate}";
		
		$result = $this->db->query( $sql );
		
		if ( false === $result ) {
			throw new Migration_Exception( $this->db->get_last_error() );
		}
		
		$sql = "CREATE TABLE IF NOT EXISTS {$this->tables[ self::TABLE_SESSION_VARIABLES ]} (
session_id varchar(32) NOT NULL,
session_key varchar(100) NOT NULL,
session_value text NOT NULL,
FOREIGN KEY (session_id) REFERENCES {$this->tables[ self::TABLE_SESSIONS ]}(session_id) ON DELETE CASCADE,
UNIQUE KEY session_key (session_id, session_key)
) ENGINE = INNODB {$charset_collate}";
		
		$result = $this->db->query( $sql );
		
		if ( false === $result ) {
			throw new Migration_Exception( $this->db->get_last_error() );
		}
		
	}
	
	/**
	 * @throws Migration_Exception
	 */
	public function down() {
		$result = $this->db->query( 'DROP TABLE IF EXISTS ' . $this->tables[ self::TABLE_SESSION_VARIABLES ] );
		
		if ( false === $result ) {
			throw new Migration_Exception( $this->db->get_last_error() );
		}
		
		$result = $this->db->query( 'DROP TABLE IF EXISTS ' . $this->tables[ self::TABLE_SESSIONS ] );
		
		if ( false === $result ) {
			throw new Migration_Exception( $this->db->get_last_error() );
		}
	}
}
