<?php

use Polen\Includes\Polen_Talent;

$polen_talent = new Polen_Talent();

$talent_orders = '';
$logged_user = wp_get_current_user();
if (in_array('user_talent',  $logged_user->roles)) {
	$talent_id = $logged_user->ID;
	$talent_orders = $polen_talent->get_talent_orders($talent_id);
	$video_time = $polen_talent->video_time;
}

?>
<section class="mt-2">
	<header class="page-header">
		<h1 class="page-title"><?php esc_html_e('Meus Pedidos', 'polen'); ?></h1>
	</header><!-- .page-header -->
	<div class="page-content">
		<?php
		if (empty($talent_orders)) {
			echo "<p>Você não possui novas solicitações</p>";
		} else {
			echo "<p class='mb-5'>Você tem <strong><span id='order-count'>" . count($talent_orders) . "</span> pedido(s) de vídeo</strong>, seus pedidos expiram em até 7 dias.</p>";
			if (count($talent_orders) > 0) {
				foreach ($talent_orders as $order) : ?>
					<div class="row mb-3" box-id="<?php echo $order['order_id']; ?>">
						<div class="col md-12">
							<div class="talent-order">
								<div class="row">
									<div class="col-12 col-md-8">
										<div class="row">
											<div class="col-6 col-md-3">
												<p class="title">Vídeo de</p>
												<p class="description"><?php echo $order['from']; ?></p>
											</div>
											<div class="col-6 col-md-3">
												<p class="title">Para</p>
												<p class="description"><?php echo $order['name']; ?></p>
											</div>
										</div>
										<div class="row mt-3">
											<div class="col-12 col-md-3">
												<p class="title">Ocasião</p>
												<p class="description"><?php echo $order['category']; ?></p>
											</div>
										</div>
									</div>
									<div class=" col-12">
										<div class="row">
											<div class="col-md-7">
												<div class="row">
													<div class="col-12 col-md-4 mt-3">
														<p class="title">Valor</p>
														<p class="description"><?php echo $order['total']; ?></p>
													</div>
													<div class="col-12 col-md-4 mt-3">
														<p class="title">Tempo estimado</p>
														<p class="description"><?php echo $video_time . ' segundos'; ?></p>
													</div>
													<div class="col-12 col-md-4 mt-3">
														<p class="title">Válido por</p>
														<p class="description"><?php echo $polen_talent->video_expiration_time($logged_user, $order['order_id']); ?></p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 mt-3">
										<div class="row">
											<div class="col-12 col-md-4">
												<?php
												if ($order['status'] == 'talent-accepted') {
												?>
													<button class="btn btn-primary btn-lg btn-block btn-enviar-video" button-nonce="<?php echo $order_nonce; ?>" order-id="<?php echo $order['order_id']; ?>" data-toggle="" data-target="" onclick="window.location.href = '/my-account/send-video/?order_id=<?php echo $order['order_id']; ?>'">Enviar vídeo</button>
												<?php
												}

												if ($order['status'] == 'payment-approved') {
													$order_nonce = wp_create_nonce('polen-order-data-nonce');
												?>
													<button class="btn btn-primary btn-lg btn-block btn-visualizar-pedido" button-nonce="<?php echo $order_nonce; ?>" order-id="<?php echo $order['order_id']; ?>" data-toggle="modal" data-target="#OrderActions">Visualizar</button>
												<?php
												}
												?>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
		<?php
				endforeach;
			}
		}
		?>

		<!-- Modal -->
		<div class="modal fade" id="OrderActions" tabindex="-1" role="dialog" aria-labelledby="OrderActionsTitle" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="row modal-body">
						<!-- Início -->
						<div class="col-12 talent-order-modal">
							<button type="button" class="close" data-dismiss="modal" aria-label="Fechar"></button>
							<div class="row body">
								<div class="col-12">
									<p class="p small">Vídeo de</p>
									<span class="name" id="video-from"></span>
								</div>
								<div class="col-12 mt-3">
									<p class="p small">Para</p>
									<span class="name" id="video-name"></span>
								</div>
							</div>
							<div class="row mt-4">
								<div class="col">
									<p class="p small mb-3">Ocasião</p>
									<span class="category" id="video-category"></span>
								</div>
							</div>
							<div class="row mt-4">
								<div class="col">
									<p class="p small mb-3">e-mail de contato</p>
									<span class="category" id="video-email"></span>
								</div>
							</div>
							<div class="row mt-4">
								<div class="col">
									<p class="p small mb-2">Instruções</p>
									<p class="text" id="video-instructions"></p>
								</div>
							</div>
							<?php
							$accept_reject_nonce = wp_create_nonce('polen-order-accept-nonce');
							?>
							<div class="row py-4 mb-4">
								<div class="col-12 text-center modal-group-buttons" button-nonce="<?php echo $accept_reject_nonce; ?>" order-id="">
									<button type="button" class="talent-check-order accept" action-type="accept"></button>
									<button type="button" class="talent-check-order reject" action-type="reject"></button>
								</div>
							</div>
						</div>
						<!-- Fim -->
					</div>
				</div>
			</div>
		</div><!-- /Modal -->
	</div><!-- .page-content -->
</section><!-- .no-results -->
