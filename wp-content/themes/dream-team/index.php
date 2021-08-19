<?php
  echo '<!DOCTYPE html><html><head>';
  wp_head();
  ob_start();
  echo require_once('dist/index.html');
  $str = ob_get_clean();
  $str = str_replace('/_next/','/wp-content/themes/dream-team/dist/_next/',$str);
  $str = str_replace('/favicon','/wp-content/themes/dream-team/assets/favicons/favicon',$str);
  $str = str_replace('/apple-icon','/wp-content/themes/dream-team/assets/favicons/apple-icon',$str);
  $str = str_replace('<!DOCTYPE html><html><head>','',$str);
  $str = str_replace('</body></html>','',$str);
  echo $str;
  wp_footer();
  echo '</body></html>';
