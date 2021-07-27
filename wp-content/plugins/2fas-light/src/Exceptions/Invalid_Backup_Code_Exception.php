<?php
declare(strict_types=1);

namespace TwoFAS\Light\Exceptions;

use Throwable;

class Invalid_Backup_Code_Exception extends Validation_Exception {
	
	public function __construct( $message = "", $code = 0, Throwable $previous = null ) {
		parent::__construct( $message, $code, $previous );
		
		$this->label = 'backup-code-invalid';
	}
}
