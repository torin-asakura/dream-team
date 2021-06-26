<?php

/**
 * Add filter to change locale
 */
add_filter( 'pll_custom_flag', 'pll_custom_flag', 10, 2 );

function pll_custom_flag( $flag, $code ) {
    $flag['url']    = home_url( '/wp-content/themes/dt/polylang/{$code}.svg' );
    $flag['width']  = 32;
    $flag['height'] = 22;
    return $flag;
}
