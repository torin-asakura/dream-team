<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Storage;

use DateTime;
use Exception;
use TwoFAS\Light\Authentication\Authentication;
use TwoFAS\Light\Exceptions\{DateTime_Creation_Exception, DB_Exception};
use TwoFAS\Light\Helpers\Time;

class Authentication_Storage {

	const TABLE_AUTHENTICATIONS = 'twofas_light_authentications';

	/**
	 * @var DB_Wrapper
	 */
	private $db;

	/**
	 * @var Time
	 */
	private $time;

	/**
	 * @param DB_Wrapper $db
	 * @param Time       $time
	 */
	public function __construct( DB_Wrapper $db, Time $time ) {
		$this->db   = $db;
		$this->time = $time;
	}

	/**
	 * @param int $user_id
	 *
	 * @return Authentication|null
	 *
	 * @throws DateTime_Creation_Exception
	 */
	public function get_authentication( int $user_id ) {
		$authentication = $this->get_usable( $user_id );

		if ( ! is_array( $authentication ) ) {
			return null;
		}

		return $this->create(
			intval( $authentication['id'] ),
			intval( $authentication['user_id'] ),
			intval( $authentication['attempts_remaining'] ),
			$this->time->get_datetime_for_timestamp( intval( $authentication['created_at'] ) ),
			$this->time->get_datetime_for_timestamp( intval( $authentication['valid_to'] ) )
		);
	}

	/**
	 * @param int $user_id
	 *
	 * @return bool
	 *
	 * @throws DateTime_Creation_Exception
	 */
	public function has_open_authentication( int $user_id ): bool {
		return ( $this->get_authentication( $user_id ) instanceof Authentication );
	}

	/**
	 * @param int $user_id
	 *
	 * @return Authentication
	 *
	 * @throws DateTime_Creation_Exception
	 */
	public function open_authentication( int $user_id ): Authentication {
		return $this->add(
			$user_id,
			Authentication::MAX_LOGIN_ATTEMPTS,
			$this->time->get_current_timestamp(),
			$this->time->get_current_timestamp_plus_seconds( Authentication::EXPIRATION_IN_SECONDS )
		);
	}

	public function close_authentication( Authentication $authentication ) {
		$this->delete( $authentication );
	}

	public function reduce_authentication_attempts( Authentication $authentication ) {
		$table = $this->get_table_full_name( self::TABLE_AUTHENTICATIONS );

		$this->db->update(
			$table,
			[
				'attempts_remaining' => $authentication->get_attempts_remaining() - 1
			],
			[
				'user_id' => $authentication->get_user_id()
			],
			[ '%d' ],
			[ '%d' ]
		);
	}

	/**
	 * @throws Exception
	 */
	public function delete_expired_authentications() {
		$now   = $this->time->get_current_timestamp();
		$table = $this->get_table_full_name( self::TABLE_AUTHENTICATIONS );
		$sql   = $this->db->prepare( "DELETE FROM {$table} WHERE valid_to < %d", [ $now ] );
		$this->db->query( $sql );
	}

	/**
	 * @param int $user_id
	 *
	 * @return null|array
	 */
	private function get_usable( int $user_id ) {
		$table = $this->get_table_full_name( self::TABLE_AUTHENTICATIONS );
		$sql   = $this->db->prepare(
			"SELECT * FROM {$table} WHERE `user_id` = %d",
			[ $user_id ]
		);

		return $this->db->get_row( $sql, ARRAY_A );
	}

	/**
	 * @param int $user_id
	 * @param int $attempts_remaining
	 * @param int $created_at
	 * @param int $valid_to
	 *
	 * @return Authentication
	 *
	 * @throws DateTime_Creation_Exception
	 */
	private function add( int $user_id, int $attempts_remaining, int $created_at, int $valid_to ): Authentication {
		$table = $this->get_table_full_name( self::TABLE_AUTHENTICATIONS );

		$authentication_id = $this->db->insert(
			$table,
			[
				'user_id'            => $user_id,
				'attempts_remaining' => $attempts_remaining,
				'created_at'         => $created_at,
				'valid_to'           => $valid_to,
			],
			[ '%d', '%d', '%d', '%d' ]
		);

		if ( false === $authentication_id ) {
			throw new DB_Exception( 'Cannot add new authentication' );
		}

		return $this->create(
			$authentication_id,
			$user_id,
			$attempts_remaining,
			$this->time->get_datetime_for_timestamp( $created_at ),
			$this->time->get_datetime_for_timestamp( $valid_to )
		);
	}

	private function delete( Authentication $authentication ) {
		$table = $this->get_table_full_name( self::TABLE_AUTHENTICATIONS );

		$this->db->delete(
			$table,
			[
				'user_id' => $authentication->get_user_id()
			],
			[ '%d' ]
		);
	}

	private function create(
		int $id,
		int $user_id,
		int $attempts_remaining,
		DateTime $created_at,
		DateTime $valid_to
	): Authentication {
		return new Authentication( $id, $user_id, $attempts_remaining, $created_at, $valid_to );
	}

	private function get_table_full_name( string $table_name ): string {
		return $this->db->get_prefix() . $table_name;
	}
}
