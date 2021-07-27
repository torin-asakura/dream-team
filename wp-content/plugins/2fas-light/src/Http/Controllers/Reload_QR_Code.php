<?php
declare(strict_types=1);

namespace TwoFAS\Light\Http\Controllers;

use TwoFAS\Light\Http\Request\Request;
use TwoFAS\Light\Http\Response\JSON_Response;
use TwoFAS\Light\Totp\{QR_Generator, Secret_Generator};

class Reload_QR_Code extends Controller {

	/**
	 * @var Secret_Generator
	 */
	private $secret_generator;

	/**
	 * @var QR_Generator
	 */
	private $qr_generator;

	/**
	 * @param Secret_Generator $secret_generator
	 * @param QR_Generator     $qr_generator
	 */
	public function __construct( Secret_Generator $secret_generator, QR_Generator $qr_generator ) {
		$this->secret_generator = $secret_generator;
		$this->qr_generator     = $qr_generator;
	}

	public function reload( Request $request ): JSON_Response {
		$totp_secret = $this->secret_generator->generate_totp_secret();
		$qr_code     = $this->qr_generator->generate_qr_code( $totp_secret );

		return $this->json(
			[
				'twofas_light_totp_secret' => $totp_secret,
				'twofas_light_qr_code'     => $qr_code
			]);
	}
}
