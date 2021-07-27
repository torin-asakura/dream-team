<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http;

abstract class Code {
	
	const OK                    = 200;
	const CREATED               = 201;
	const BAD_REQUEST           = 400;
	const FORBIDDEN             = 403;
	const NOT_FOUND             = 404;
	const INTERNAL_SERVER_ERROR = 500;
}
