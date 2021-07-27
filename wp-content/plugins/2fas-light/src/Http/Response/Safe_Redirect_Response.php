<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Response;

use TwoFAS\Light\Core\Plugin;

class Safe_Redirect_Response extends Redirect_Response {

	public function redirect() {
		nocache_headers();
		wp_safe_redirect( $this->url->get() );
		Plugin::terminate();
	}
}
