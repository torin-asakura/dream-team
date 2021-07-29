<?php
declare(strict_types=1);

namespace TwoFAS\Light\Helpers;

use TwoFAS\Light\Http\Action_Index;

class URL {
	
	public static function create( string $page, string $action = '', array $other_parameters = [] ): string {
		$url = admin_url( 'admin.php' );
		$url = add_query_arg( 'page', $page, $url );
		
		if ( $action ) {
			$url = add_query_arg( Action_Index::TWOFAS_ACTION_KEY, $action, $url );
		}
		
		$url = add_query_arg( $other_parameters, $url );
		
		return $url;
	}
	
	public static function create_with_nonce( string $page, string $action, array $other_parameters = [] ): string {
		$url = self::create( $page, $action, $other_parameters );
		
		return wp_nonce_url( $url, $action );
	}
	
	public static function create_form_nonce( string $action ): string {
		$nonce_field = '<input type="hidden" name="_wpnonce" value="' . wp_create_nonce( $action ) . '" />';
		$nonce_field .= wp_referer_field( false );
		
		return $nonce_field;
	}
}
