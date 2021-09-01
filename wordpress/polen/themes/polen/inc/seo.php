<?php

use Polen\Includes\Cart\Polen_Cart_Item_Factory;
use Polen\Includes\Polen_Video_Info;
use Polen\Includes\Polen_Update_Fields;
use Polen\Social\Social_Rewrite;
use Polen\Tributes\Tributes_Model;
use Polen\Tributes\Tributes_Rewrite_Rules;

function safeImage($thumbnail)
{
	if (!$thumbnail || is_null($thumbnail) || empty($thumbnail)) {
		$thumbnail = polen_get_custom_logo_url();
	}
	return $thumbnail;
}

function pol_print_schema_data($data = array())
{
	if(!$data || empty($data)) {
		return;
	}
?>
	<script type="application/ld+json">
		{
			"@context": "http://schema.org/",
			"@type": "TalentProfile",
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "<?php echo $data['url']; ?>"
			},
			"headline": "<?php echo $data['title']; ?>",
			"image": [
				"<?php echo $data['image']; ?>"
			],
			"datePublished": "<?php echo $data['date_published']; ?>",
			"dateModified": "<?php echo $data['date_modified']; ?>",
			"dateCreated": "<?php echo $data['date_created']; ?>",
			"author": {
				"@type": "Person",
				"name": "<?php echo $data['talent_name']; ?>",
				"url": "<?php echo $data['talent_url']; ?>",
				"image": "<?php echo $data['talent_image']; ?>",
				"sameAs": <?php echo $data['talent_social_links_array']; ?>
			},
			"publisher": {
				"@type": "Organization",
				"name": "Polen.me",
				"url": "https://polen.me",
				"logo": {
					"@type": "ImageObject",
					"url": "<?php echo $data['logo']; ?>"
				}
			},
			"description": "<?php echo $data['description']; ?>"
		}
	</script>
	<?php
}

/**
 * Tags Open Graph
 */
if (
	!in_array(
		'all-in-one-seo-pack/all_in_one_seo_pack.php',
		apply_filters(
			'active_plugins',
			get_option('active_plugins')
		)
	)
) {

	add_action('wp_head', function () {

		global $post;
		global $is_video;
		$tribute_app = get_query_var(Tributes_Rewrite_Rules::TRIBUTES_QUERY_VAR_TRUBITES_APP);
		$social_app = get_query_var(Social_Rewrite::QUERY_VARS_SOCIAL_APP);

		$video_hash = get_query_var('video_hash');

		//Header Padrão ----------------
		$headers = array(
			'title' => 'Polen.me - ' . get_the_title(),
			'description' => get_bloginfo('description'),
			'site_name' => get_bloginfo('title'),
			'url' => get_the_permalink(),
			'type' => 'site',
			'image' => '',
			'video' => '',
			'keywords' => 'Vídeos Personalizados',
		);

		// Single de Produto - Página do Artista
		if (!empty($post) && $post->post_type == 'product') {

			$talent = new Polen_Update_Fields();
			$talent = $talent->get_vendor_data($post->post_author);

			$headers['title'] = "Vídeos Personalizados com {$talent->nome} - Polen.me";
			$headers['description'] = "Experimente um novo jeito de se relacionar através de videos personalizados com {$talent->nome}";
			$headers['image'] = safeImage(get_the_post_thumbnail_url(get_the_ID()));

			// Página Todos os Artistas - /shop
		} elseif (is_shop()) {

			$headers['title'] = 'Videos personalizados do seu artista favorito, do seu jeito!';
			$headers['description'] = 'Experimente um novo jeito de se relacionar através de videos personalizados. Emocione com videos personalizados de famosos.';

			// Página do Video player - /v
		} elseif ($is_video === true && !empty($video_hash)) {

			$video_info = Polen_Video_Info::get_by_hash($video_hash);
			$order = wc_get_order($video_info->order_id);
			$item_cart = Polen_Cart_Item_Factory::polen_cart_item_from_order($order);

			$product_id = $item_cart->get_product_id();
			$product = wc_get_product($product_id);
			$talent_name = $product->get_title();

			$headers['title'] = 'Direto, Próximo, Íntimo.';
			$headers['description'] = "Olha esse novo vídeo-polen de {$talent_name}.";
			$headers['url'] = site_url('v/' . $video_info->hash);
			$headers['image'] = $video_info->vimeo_thumbnail;

			// Não sei oq é essa página
		} elseif (!empty($post) && $post->post_type == 'page' && $post->post_name == 'v') {

			$video_url = get_the_permalink() . '?' . $_SERVER['QUERY_STRING'];
			$headers['type'] = null;
			$headers['url'] = $video_url;
			$headers['video'] = $video_url;
			$headers['image'] = safeImage(get_the_post_thumbnail_url(get_the_ID()));

			// Página do Colab
		} elseif (!empty($tribute_app) && $tribute_app == '1') {

			$tribute_operation = get_query_var(Tributes_Rewrite_Rules::TRIBUTES_QUERY_VAR_TRIBUTES_OPERAION);

			$headers['title'] = 'Colab';
			$headers['site_name'] = 'Colab';

			if ($tribute_operation == Tributes_Rewrite_Rules::TRIBUTES_OPERATION_VIDEOPLAY) {

				$slug_tribute = get_query_var(Tributes_Rewrite_Rules::TRIBUTES_QUERY_VAR_TRIBUTES_VIDEOPLAY);
				$tribute = Tributes_Model::get_by_slug($slug_tribute);

				$headers['description'] = $tribute->welcome_message;
				$headers['url'] = tribute_get_url_final_video($slug_tribute);
				$headers['video'] = $tribute->vimeo_link;
				$headers['image'] = $tribute->vimeo_thumbnail;
			} else {

				$headers['type'] = 'Colab';
				$headers['description'] = 'O Colab te ajuda a criar um vídeo-presente em grupo para você emocionar quem você ama!';
				$headers['url'] = tribute_get_url_base_url();
				$headers['image'] = "' . TEMPLATE_URI . '/tributes/assets/img/logo-to-share.png";
			}

			// Página Criança Esperança
		} elseif (!empty($social_app) && $social_app == '1') {

			$image = social_get_image_by_category(social_get_category_base());

			$headers['image'] = $image;
			$headers['url'] = site_url('social/crianca-esperanca');

			// Página de Video-Autografo
		} elseif (event_promotional_is_app()) {
			$product = Promotional_Event_Rewrite::get_current_product();
			$pep = new Promotional_Event_Product( $product );
			$image_url = $pep->get_url_image_book();
			$author_name = $product->get_meta( '_promotional_event_author', true );
			$product_name = $product->get_title();
			
			$headers['title'] = "Compre o livro &quot;{$product_name}&quot; e ganhe um vídeo personalizado.";
			$headers['description'] = "Compre o livro &quot;{$product_name}&quot; e ganhe um vídeo personalizado com {$author_name}.";
			$headers['url'] = event_promotional_url_detail_product( $product );
			$headers['image'] = $image_url;
			$headers['site_name'] = "Polen.me - {$author_name} - {$product_name}";

			// Imagem padrão - Logo Polen grande
		} else {

			$headers['image'] = 'https://polen.me/polen/uploads/2021/06/cropped-logo.png';
		}

	?>
		<meta name="title" content="<?php echo $headers['title']; ?>">
		<meta name="description" content="<?php echo $headers['description']; ?>">
		<meta name="keywords" content="<?php echo $headers['keywords']; ?>">
		<meta name="author" content="<?php echo isset( $headers['author'] ) ? $headers['author'] : ''; ?>">

		<meta property="og:title" content="<?php echo $headers['title']; ?>">
		<meta property="og:description" content="<?php echo $headers['description']; ?>">
		<meta property="og:url" content="<?php echo $headers['url']; ?>">
		<meta property="og:image" content="<?php echo $headers['image']; ?>">
		<meta property="og:locale" content="<?php echo get_locale(); ?>">
		<meta property="og:site_name" content="<?php echo $headers['site_name']; ?>">

		<?php if (!empty($headers['type'])) : ?>
			<meta property="og:type" content="<?php echo $headers['type']; ?>">
		<?php endif; ?>

		<?php if (!empty($headers['video'])) : ?>
			<meta property="og:video" content="<?php echo $headers['video']; ?>">
		<?php endif; ?>
<?php

	});
}
