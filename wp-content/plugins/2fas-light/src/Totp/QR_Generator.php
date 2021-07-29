<?php
declare(strict_types=1);

namespace TwoFAS\Light\Totp;

class QR_Generator {
	
	/** @var QR_Client */
	private $client;
	
	/** @var QR_Code_Message */
	private $message;
	
	/**
	 * @param QR_Client       $client
	 * @param QR_Code_Message $message
	 */
	public function __construct( QR_Client $client, QR_Code_Message $message ) {
		$this->client  = $client;
		$this->message = $message;
	}
	
	public function generate_qr_code( string $totp_secret ): string {
		return $this->client->base64( $this->message->create( $totp_secret) );
	}
}
