<?php

$twofas_container_builder = new DI\ContainerBuilder();
$twofas_container_builder
	->addDefinitions( __DIR__ . '/routes.php' )
	->addDefinitions( __DIR__ . '/dependencies/core.php' )
	->addDefinitions( __DIR__ . '/dependencies/http.php' )
	->addDefinitions( __DIR__ . '/dependencies/hooks.php' )
	->addDefinitions( __DIR__ . '/dependencies/authentication.php' )
	->addDefinitions( __DIR__ . '/dependencies/listeners.php' );

$twofas_container_builder->useAnnotations(false);
$twofas_container = $twofas_container_builder->build();
