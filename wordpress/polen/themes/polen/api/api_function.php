<?php
/**
 * Tratar response da API
 *
 * @param mixed $data
 * @param int $status_code
 * @param array $headers
 * @return WP_REST_Response
 */
function api_response($data = null, int $status_code = 200, array $headers = []): WP_REST_Response
{
  return new WP_REST_Response(['data' => $data], $status_code, $headers);
}

/**
 * Exibir origem do pedido
 */
function custom_fields_in_order_admin($order)
{
    $origin = 'polen_site';
    if (get_post_meta($order->id, 'hotsite', true)) {
        $origin = get_post_meta($order->id, 'hotsite', true);
    }

    $order_is_ep = event_promotional_order_is_event_promotional($order);
    if ($order_is_ep) {
        $origin = event_promotional_order_get_slug_event($order);
    }

    echo "<p><strong>Origem:</strong><br> {$origin} </p><br>";
}
add_action('woocommerce_admin_order_data_after_billing_address', 'custom_fields_in_order_admin', 10, 1);