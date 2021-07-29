<?php
declare(strict_types=1);

namespace TwoFAS\Light\Totp;

use Endroid\QrCode\{ErrorCorrectionLevel, QrCode};

class QR_Client {
	
	const SIZE = 300;
	
	/**
	 * @var QrCode
	 */
	private $client;
	
	/**
	 * @param QrCode $client
	 */
	public function __construct( QrCode $client ) {
		$this->client = $client;
	}
	
	public function base64( string $text ): string {
		$this->client
			->setText( $text )
			->setSize( self::SIZE )
			->setErrorCorrectionLevel( ErrorCorrectionLevel::HIGH );
		
		return $this->client->writeDataUri();
	}
}
