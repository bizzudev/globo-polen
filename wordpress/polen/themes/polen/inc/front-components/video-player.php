<?php

use Polen\Includes\Polen_Order_Review;
use Polen\Includes\Polen_Update_Fields;

function polen_get_talent_video_buttons($talent, $video_url, $video_download, $hash = null, $product = null)
{
	$donate = $product ? get_post_meta($product->get_id(), '_is_charity', true) : false;
?>
	<?php if ($product && $product->is_in_stock()) : ?>
		<button onclick="clickToBuy()" class="btn btn-primary btn-lg btn-block mb-4">
			<?php if ($donate) : ?>
				<span class="mr-2"><?php Icon_Class::polen_icon_donate(); ?></span>
			<?php endif; ?>
			Pedir vídeo R$<?php echo $product->get_price(); ?>
		</button>
	<?php endif; ?>
	<?php if (wp_is_mobile()) : ?>
		<button onclick="shareVideo('Compartilhar vídeo de <?php echo $talent->nome; ?>', '<?php echo $video_url; ?>')" class="btn btn-outline-light btn-lg btn-block share-link mb-4"><?php Icon_Class::polen_icon_share(); ?>Compartilhar</button>
	<?php endif; ?>
	<button onclick="copyToClipboard('<?php echo $video_url; ?>')" class="btn btn-outline-light btn-lg btn-block share-link mb-4"><?php Icon_Class::polen_icon_clipboard(); ?>Copiar Link</button>
	<?php if (!empty($video_download)) : ?>
		<?php $video_download_nonce = wp_create_nonce('generate-download-video-url'); ?>
		<a href="#" onclick="downloadClick_handler(event)" data-download="<?= $hash; ?>" data-nonce="<?= $video_download_nonce; ?>" class="btn btn-outline-light btn-lg btn-block share-link mb-4"><?php Icon_Class::polen_icon_download(); ?>Download</a>
	<?php endif; ?>
<?php
}

function polen_video_icons($user_id, $iniciais, $first = false)
{
?>
	<div class="video-icons">
		<figure class="image-cropper color small">
			<?php echo polen_get_avatar($user_id, 'polen-square-crop-lg'); ?>
		</figure>
		<?php if ($first) : ?>
			<figure class="image-cropper small">
				<img src="<?php echo TEMPLATE_URI . "/assets/img/logo-round-orange.svg" ?>" alt="Logo redonda">
			</figure>
		<?php else : ?>
			<div class="text-cropper small"><?php echo $iniciais; ?></div>
		<?php endif; ?>
	</div>
<?php
}

function polen_get_video_player_html($data, $user_id = null)
{
	if (!$data) {
		return;
	}
	wp_enqueue_script("vimeo");

	$video_url = tribute_get_url_base_url() . "/v/" . $data->slug;
?>
	<div class="row video-card">
		<header class="col-md-6 p-0">
			<div id="video-box">
				<div id="polen-video" class="polen-video"></div>
			</div>
			<script>
				jQuery(document).ready(function() {
					var videoPlayer = new Vimeo.Player("polen-video", {
						url: "<?php echo $data->vimeo_link; ?>",
						autoplay: false,
						muted: false,
						loop: false,
						width: document.getElementById("polen-video").offsetWidth,
					});
				})
			</script>
		</header>
		<div class="content col-md-6 mt-4">
			<header class="row content-header">
				<div class="col-9">
					<h4 class="m-0 name">Seu vídeo</h4>
					<h5 class="mt-3 cat">Colab para <?php echo $data->name_honored; ?></h5>
				</div>
			</header>
			<div class="row mt-4 share">
				<div class="col-12">
					<?php polen_get_talent_video_buttons($data, $video_url, $data->vimeo_url_download, $data->hash); ?>
				</div>
			</div>
		</div>
	</div>
<?php
}


/**
 * Cria a tela para assitir video
 * @param Polen\Includes\Polen_Video_Info
 * @param WC_Product
 * @param WC_Order 
 * @param WP_User Usuario talento
 * @return html
 */
function polen_get_video_player( $video_info, $product, $order, $user_talent )
{
	wp_enqueue_script('vimeo');
	$video_url = polen_get_video_url_by_video_info( $video_info );
	$isRateble = Polen_Order_Review::can_make_review(get_current_user_id(), $order->get_id());
?>
	<div class="row video-card">
		<header class="col-md-6 p-0">
			<div id="video-box" class="video-box">
				<div id="polen-video" class="polen-video"></div>
				<div class="water-mark">
					<?php polen_get_url_watermark_video_player( $order ) ;?>
				</div>
			</div>
			<script>
				jQuery(document).ready(function() {
					var videoPlayer = new Vimeo.Player("polen-video", {
						url: "<?php echo $video_info->vimeo_link; ?>",
						autoplay: false,
						muted: false,
						loop: false,
						width: document.getElementById("polen-video").offsetWidth,
					});
				})
			</script>
		</header>
		<div class="content col-md-6 mt-4">
			<header class="row content-header">
				<div class="col-3">
					<a href="<?php echo $product->get_permalink(); ?>" class="no-underline">
						<span class="image-cropper">
							<?php echo polen_get_avatar($user_talent->ID, "polen-square-crop-lg"); ?>
						</span>
					</a>
				</div>
				<div class="col-9">
					<h4 class="m-0"><a href="<?php echo $product->get_permalink(); ?>" class="name"><?php echo $user_talent->display_name; ?></a></h4>
					<h5 class="m-0"><a href="<?= polen_get_url_category_by_order_id( $order->get_id() ); ?>" class="d-block my-2 cat"><?php echo polen_get_title_category_by_product( $product ); ?></a></h5>
					<a href="<?php echo $video_url; ?>" class="url"><?php echo $video_url; ?></a>
				</div>
			</header>
			<div class="row mt-4 share">
				<div class="col-12">
					<?php if (get_current_user_id() !== 0 && $isRateble) : ?>
						<a href="/my-account/create-review/<?= $order->get_id(); ?>" class="btn btn-primary btn-lg btn-block mb-4">Avaliar vídeo</a>
					<?php endif; ?>
					<?php 
					$Talent_Fields = new Polen_Update_Fields();
					$talent = $Talent_Fields->get_vendor_data( $video_info->talent_id );
					polen_get_talent_video_buttons($talent, $video_url, $video_info->vimeo_url_download, $video_info->hash, $product); ?>
				</div>
			</div>
		</div>
	</div>
<?php
}

function polen_player_video_modal_ajax_invalid_hash()
{
?>
	<h4>Conteúdo indisponível</h4>
<?php
}

function polen_get_video_url_by_video_info( $video_info )
{
	return site_url( "v/" . $video_info->hash );
}

function polen_get_url_watermark_video_player( $order )
{
	$is_social = social_order_is_social( $order );
	$is_event_promotional = event_promotional_order_is_event_promotional( $order );
	
	if ($is_social) : ?>
	
		<img src="<?php echo TEMPLATE_URI ?>/assets/img/criesp/logo-criesp.png" class="logo social" alt="Logo Criança Esperança" />
	
	<?php elseif( $is_event_promotional ) : ?>
	
		<img src="<?php echo TEMPLATE_URI ?>/assets/img/criesp/logo-criesp.png" class="logo social" alt="Logo Criança Esperança" />
	
	<?php endif; ?>

	<img src="<?php echo TEMPLATE_URI ?>/assets/img/logo.png" class="logo polen" alt="Logo Polen" />
	
	<?php
}
