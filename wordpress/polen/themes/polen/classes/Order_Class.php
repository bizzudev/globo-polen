<?php

class Order_Class
{

	public static function polen_get_order_flow_obj($order_number, $order_status)
	{
		$flow_1 = array(
			'pending' => array(
				'title' => 'Pendente de pagamento',
				'description' => 'Seu número de pedido #' . $order_number . ' está aguardando pagamento.',
				'status' => 'fail',
			),
			'payment-in-analysis' => array(
				'title' => 'Pagamento em análise',
				'description' => 'Seu número de pedido #' . $order_number . ' está em análise pela sua operadora de crédito.',
				'status' => 'complete',
			),
			'payment-rejected' => array(
				'title' => 'Pagamento rejeitado',
				'description' => 'Seu número de pedido #' . $order_number . ' foi rejeitado pela sua operadora de crédito.',
				'status' => 'fail',
			),
			'payment-approved' => array(
				'title' => 'Pagamento aprovado',
				'description' => 'Seu número de pedido #' . $order_number . ' foi aprovado.',
				'status' => 'complete',
			),
		);

		$flow_2 = array(
			'order-expired' => array(
				'title' => 'Pedido expirado',
				'description' => 'Infelizmente o artista não aceitou o seu pedido em tempo hábil e seu pedido expirou.',
				'status' => 'fail',
			),
			'talent-rejected' => array(
				'title' => 'O talento rejeitou',
				'description' => 'Infelizmente o talento não aceitou o seu pedido.',
				'status' => 'fail',
			),
			'talent-accepted' => array(
				'title' => 'O talento aceitou',
				'description' => 'O talento aceitou o seu pedido.',
				'status' => 'complete',
			),
			'_next-step' => array(
				'title' => 'Aguardando confirmação do talento',
				'description' => 'Caso seu pedido não seja aprovado pelo talento o seu dinheiro será devolvido imediatamente.',
				'status' => 'in-progress',
			),
		);

		$flow_3 = array(
			'completed' => array(
				'title' => 'Seu vídeo está pronto!',
				'description' => 'O talento aceitou o seu pedido.',
				'status' => 'complete',
			),
			'cancelled' => array(
				'title' => 'Seu pedido foi cancelado',
				'description' => 'Seu pedido foi cancelado.',
				'status' => 'fail',
			),
		);

		if (isset($flow_1[$order_status])) {
			$flows = array(
				$flow_1[$order_status],
				'_next-step_1' => array(
					'title' => 'Aguardando confirmação do talento',
					'description' => 'Caso seu pedido não seja aprovado pelo talento o seu dinheiro será devolvido imediatamente.',
					'status' => $flow_1[$order_status]['status'] === "fail" ? 'pending' : 'in-progress',
				),
				'_next-step_2' => array(
					'title' => 'Aguardando gravação do vídeo',
					'description' => 'Quando o artista disponibilizar o vídeo ele será exibido aqui.',
					'status' => 'pending',
				),
			);
		} elseif (isset($flow_2[$order_status])) {
			$flows = array(
				'payment-approved' => array(
					'title' => 'Pagamento aprovado',
					'description' => 'Seu número de pedido #' . $order_number . ' foi aprovado.',
					'status' => 'complete',
				),
				$flow_2[$order_status],
				'_next-step_2' => array(
					'title' => 'Aguardando gravação do vídeo',
					'description' => 'Quando o artista disponibilizar o vídeo ele será exibido aqui.',
					'status' => 'in-progress',
				),
			);
		} elseif (isset($flow_3[$order_status])) {
			$flows = array(
				'payment-approved' => array(
					'title' => 'Pagamento aprovado',
					'description' => 'Seu número de pedido #' . $order_number . ' foi aprovado.',
					'status' => 'complete',
				),
				'talent-accepted' => array(
					'title' => 'O talento aceitou',
					'description' => 'O talento aceitou o seu pedido.',
					'status' => 'complete',
				),
				$flow_3[$order_status],
			);
		}

		return $flows;
	}

	public static function clearArray($arr)
	{
		$new_array = array();
		foreach ($arr as $value) {
			$new_array[] = $value;
		}
		return $new_array;
	}
}