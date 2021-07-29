<?php
declare( strict_types=1 );

namespace TwoFAS\Light\Helpers;

use DateTime;
use DateTimeZone;
use Exception;
use LogicException;
use TwoFAS\Light\Exceptions\DateTime_Creation_Exception;

class Time {
	
	/**
	 * @return int UNIX timestamp since UNIX epoch (in GMT).
	 */
	public function get_current_timestamp(): int {
		return time();
	}
	
	/**
	 * @return DateTime A DateTime object for current time with timezone set to the timezone value in WP options.
	 *
	 * @throws DateTime_Creation_Exception
	 */
	public function get_current_datetime(): DateTime {
		try {
			return new DateTime( 'now', $this->create_datetimezone_from_wp_timezone_setting() );
		} catch ( Exception $e ) {
			throw new DateTime_Creation_Exception( $e->getMessage() );
		}
	}
	
	/**
	 * @param int $timestamp
	 *
	 * @return DateTime A DateTime object for a given timestamp with timezone set to the timezone value in WP options.
	 * @throws DateTime_Creation_Exception
	 */
	public function get_datetime_for_timestamp( int $timestamp ): DateTime {
		try {
			$datetime = new DateTime( '@' . $timestamp );
			$datetime->setTimezone( $this->create_datetimezone_from_wp_timezone_setting() );
		} catch ( Exception $e ) {
			throw new DateTime_Creation_Exception( $e->getMessage() );
		}
		
		return $datetime;
	}
	
	/**
	 * @param int $timestamp
	 *
	 * @return string Returns date and time as string formatted according to WP configuration.
	 * @throws DateTime_Creation_Exception
	 */
	public function timestamp_to_wp_datetime( int $timestamp ): string {
		$format   = sprintf( '%s %s', get_option( 'date_format' ), get_option( 'time_format' ) );
		$datetime = $this->get_datetime_for_timestamp( $timestamp );
		
		return $datetime->format( $format );
	}
	
	public function get_current_timestamp_plus_seconds( int $seconds ): int {
		return $this->get_current_timestamp() + $seconds;
	}
	
	public function get_current_timestamp_minus_seconds( int $seconds ): int {
		return $this->get_current_timestamp() - $seconds;
	}
	
	/**
	 * Adapted from https://github.com/Rarst/wpdatetime
	 *
	 * @return DateTimeZone
	 *
	 * @throws LogicException
	 * @throws Exception
	 */
	private function create_datetimezone_from_wp_timezone_setting(): DateTimeZone {
		$timezone_string = get_option( 'timezone_string' );
		
		if ( ! empty( $timezone_string ) ) {
			return new DateTimeZone( $timezone_string );
		}
		
		$offset = get_option( 'gmt_offset' );
		
		if ( ! is_null( $offset ) && ! is_numeric( $offset ) ) {
			throw new LogicException( 'Incorrect gmt offset' );
		}
		$hours   = (float) $offset;
		$minutes = ( (float)$offset - floor( (float)$offset ) ) * 60;
		$offset  = sprintf( '%+03d:%02d', $hours, $minutes );
		
		return new DateTimeZone( $offset );
	}
}
