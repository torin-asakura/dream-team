<?php
declare(strict_types=1);

namespace TwoFAS\Light\Authentication;

class Jetpack_User_Data {
	
	/**
	 * @var object
	 */
	private $user_data;
	
	/**
	 * @param object $jetpack_user_data
	 */
	public function __construct( $jetpack_user_data ) {
		$this->user_data = $jetpack_user_data;
	}
	
	public function has_two_factor_enabled(): bool {
		return isset( $this->user_data->two_step_enabled ) && true === $this->user_data->two_step_enabled;
	}
}
