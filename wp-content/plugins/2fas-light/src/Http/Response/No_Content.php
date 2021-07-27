<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Response;

class No_Content extends View_Response {

	public function __construct() {
		parent::__construct( '', array() );
	}
}
