<?php
global $Polen_Plugin_Settings;
$phone_number = $Polen_Plugin_Settings['polen_whastsapp_phone'];
$mensagem = $Polen_Plugin_Settings['polen_whastsapp_text'];
$policies = $Polen_Plugin_Settings['polen_cookies_policities_text'];
?>

<?php if( !empty($phone_number) && !is_front_page() ) : ?>
	<a href="https://wa.me/<?php echo $phone_number ?>?text=<?= urlencode($mensagem); ?>" class="whatsapp_link" target="_blank"><?php Icon_Class::polen_icon_social("whatsapp") ?></a>
<?php endif; ?>

<?php if (!empty($policies) && !isset($_COOKIE[POL_COOKIES['POLICIES']])) : ?>
	<div id="policies-box" class="policies-box">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="box-round shadow p-4">
						<div>
							<?php echo $policies; ?>
						</div>
						<div class="mt-2 text-md-right">
							<button onclick="polAcceptCookies()" class="btn btn-primary btn-sm">Aceitar todos</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php endif; ?>