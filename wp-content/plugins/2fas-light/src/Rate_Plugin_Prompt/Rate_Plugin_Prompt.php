<?php
declare(strict_types=1);

namespace TwoFAS\Light\Rate_Plugin_Prompt;

use DateTime;
use TwoFAS\Light\Exceptions\DateTime_Creation_Exception;
use TwoFAS\Light\Exceptions\Rate_Plugin_Countdown_Never_Started_Exception;
use TwoFAS\Light\Helpers\Time;
use TwoFAS\Light\Storage\User_Storage;

class Rate_Plugin_Prompt {
	
	const DAYS_BEFORE_DISPLAYING_PROMPT = 14;
	const REQUIRED_CAPABILITY           = 'install_plugins';
	
	/** @var Time */
	private $time;
	
	/** @var User_Storage */
	private $user_storage;
	
	/**
	 * @param User_Storage $user_storage
	 * @param Time         $time
	 */
	public function __construct( User_Storage $user_storage, Time $time ) {
		$this->user_storage = $user_storage;
		$this->time         = $time;
	}
	
	public function should_display(): bool {
		try {
			return $this->are_display_conditions_satisfied();
		} catch ( Rate_Plugin_Countdown_Never_Started_Exception $e ) {
			return $this->handle_countdown_never_started();
		} catch ( DateTime_Creation_Exception $e ) {
			return false;
		}
	}
	
	/**
	 * Restart the countdown to when to start displaying the prompt again.
	 * @throws DateTime_Creation_Exception
	 */
	public function restart_countdown() {
		$current_date = $this->time->get_current_datetime();
		$this->user_storage->update_rate_prompt_countdown_start_date( $current_date );
	}
	
	public function hide() {
		$this->user_storage->set_rate_plugin_prompt_hidden();
	}
	
	/**
	 * @return bool
	 *
	 * @throws Rate_Plugin_Countdown_Never_Started_Exception
	 * @throws DateTime_Creation_Exception
	 */
	private function are_display_conditions_satisfied(): bool {
		return current_user_can( self::REQUIRED_CAPABILITY ) &&
		       $this->has_enough_time_passed() &&
		       ! $this->user_storage->is_rate_plugin_prompt_hidden();
	}
	
	/**
	 * @return bool
	 *
	 * @throws Rate_Plugin_Countdown_Never_Started_Exception
	 * @throws DateTime_Creation_Exception
	 */
	private function has_enough_time_passed(): bool {
		$prompt_countdown_start = $this->get_countdown_start_datetime();
		$current_date           = $this->time->get_current_datetime();
		
		return $current_date->diff( $prompt_countdown_start )->days >= self::DAYS_BEFORE_DISPLAYING_PROMPT;
	}
	
	private function handle_countdown_never_started(): bool {
		try {
			$this->restart_countdown();
		} catch ( DateTime_Creation_Exception $e ) {
			// Pass.
		}
		
		return false;
	}
	
	/**
	 * @return DateTime
	 *
	 * @throws Rate_Plugin_Countdown_Never_Started_Exception
	 * @throws DateTime_Creation_Exception
	 */
	private function get_countdown_start_datetime(): DateTime {
		$prompt_countdown_start_timestamp = $this->user_storage->get_rate_prompt_countdown_start_timestamp();
		
		return $this->time->get_datetime_for_timestamp( intval( $prompt_countdown_start_timestamp ) );
	}
}
