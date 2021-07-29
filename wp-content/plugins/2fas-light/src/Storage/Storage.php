<?php
declare(strict_types=1);

namespace TwoFAS\Light\Storage;

use TwoFAS\Light\Http\Request\Cookie;

class Storage {
	
	/**
	 * @var Options_Storage
	 */
	private $options_storage;
	
	/**
	 * @var User_Storage
	 */
	private $user_storage;
	
	/**
	 * @var Cookie
	 */
	private $cookie;
	
	/**
	 * @var Session_Storage_Interface
	 */
	private $session_storage;
	
	/**
	 * @var Authentication_Storage
	 */
	private $authentication_storage;
	
	/**
	 * @var Trusted_Devices_Storage
	 */
	private $trusted_devices_storage;
	
	public function __construct(
		Cookie $cookie,
		Options_Storage $options_storage,
		User_Storage $user_storage,
		Session_Storage_Interface $session_storage,
		Authentication_Storage $authentication_storage,
		Trusted_Devices_Storage $trusted_devices_storage
	) {
		$this->cookie                  = $cookie;
		$this->options_storage         = $options_storage;
		$this->user_storage            = $user_storage;
		$this->session_storage         = $session_storage;
		$this->authentication_storage  = $authentication_storage;
		$this->trusted_devices_storage = $trusted_devices_storage;
	}
	
	public function get_options(): Options_Storage {
		return $this->options_storage;
	}
	
	public function get_user_storage(): User_Storage {
		return $this->user_storage;
	}
	
	public function get_cookie(): Cookie {
		return $this->cookie;
	}
	
	public function get_session_storage(): Session_Storage_Interface {
		return $this->session_storage;
	}
	
	public function get_authentication_storage(): Authentication_Storage {
		return $this->authentication_storage;
	}

	public function get_trusted_devices_storage(): Trusted_Devices_Storage {
		return $this->trusted_devices_storage;
	}
}
