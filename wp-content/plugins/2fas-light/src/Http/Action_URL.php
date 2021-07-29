<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http;

class Action_URL implements URL_Interface {

	/**
	 * @var string
	 */
	private $page;

	/**
	 * @var string
	 */
	private $action;

	/**
	 * @param string $page
	 * @param string $action
	 */
	public function __construct( string $page, string $action = '' ) {
		$this->page   = $page;
		$this->action = $action;
	}

	public function get(): string {
		return $this->create_url();
	}

	private function create_url(): string {
		$url           = get_admin_url();
		$url           .= 'admin.php?';
		$query         = [];
		$query['page'] = $this->page;

		if ( ! empty( $this->action ) ) {
			$query['twofas_light_action'] = $this->action;
		}

		$url .= http_build_query( $query );

		return $url;
	}
}
