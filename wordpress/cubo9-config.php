<?php
if( ! defined( 'ABSPATH' ) ) {
        headear( 'location: /' );
}

/**
 * Cubo9: wp-content is now polen
 */
define( 'WP_CONTENT_DIR', ABSPATH . 'polen' );
define( 'WP_PLUGIN_DIR', WP_CONTENT_DIR . '/plugins');
define( 'PLUGINDIR', WP_PLUGIN_DIR );
if ( defined( 'WP_CLI' ) ) { $_SERVER['HTTP_HOST'] = 'localhost'; }
define( 'WP_CONTENT_URL', '//'. $_SERVER['HTTP_HOST'] . '/polen' );
define( 'WP_PLUGIN_URL', WP_CONTENT_URL . '/plugins' );

/**
 * JWT
 */
define( 'JWT_AUTH_SECRET_KEY', '90424b7a87b2b4243a0312df61d3e5722b4e87c' );
define( 'JWT_AUTH_CORS_ENABLE', true );
