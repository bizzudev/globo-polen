<?php

use Polen\Tributes\Tributes_Invites_Model;

defined('ABSPATH') || exit;

global $tribute, $tribute_hash;
?>

<?php get_header('tributes'); ?>

<main id="invite-friends">
	<div class="container py-3 tribute-container tribute-app">
		<div class="row">
			<div class="col-md-12">
				<h1 class="title text-center">Convites por e-mail</h1>
				<p class="mt-3">Cada pessoa que você adicionar receberá um e-mail de convite que contém um link para sua página de Tributo. Os convidados também receberão lembretes automáticos até que enviem um vídeo.</p>
			</div>
		</div>
		<div class="row">
			<div class="mt-4 pt-5 col-md-12 border-top">
				<h2 class="subtitle subtitle-tribute">Adicionar pessoas</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 mt-3">
				<div id="invite-friends-wrapp">
					<form id="friends-form">
						<!-- aqui os inputs hidden -->
						<input type="hidden" name="action" value="create_tribute_invites" />
						<input type="hidden" name="tribute_hash" value="<?php echo $tribute_hash; ?>" />
						<input type="hidden" name="tribute_id" value="<?php echo $tribute->ID; ?>" />
						<!-- --------------------- -->
						<div v-for="friend in friends" v-bind:key="friend.email" class="card-invite">
							<div class="row">
								<div class="mb-3 col-md-5">
									<input type="text" name="friends[name][]" v-model="friend.name" class="form-control form-control-lg" />
								</div>
								<div class="mb-3 col-md-5">
									<input type="email" name="friends[email][]" v-model="friend.email" autocapitalize="off" class="form-control form-control-lg" />
								</div>
								<div class="col-md-2 text-right">
									<button class="button-icon-only" v-on:click="removeFriend(friend.email)"><i class="icon icon-trash"></i></button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="row mt-4">
			<div class="col-md-5 mb-3">
				<label for="">Nome</label>
				<input id="add-name" type="text" v-model="name" class="form-control form-control-lg" />
			</div>
			<div class="col-md-5 mb-3">
				<label for="">e-mail</label>
				<input type="email" v-model="email" v-on:keydown="onChangeEmail" class="form-control form-control-lg" />
			</div>
			<div class="col-md-2 d-md-flex align-items-md-end">
				<button class="btn btn-primary btn-lg btn-block" v-on:click="addFriend">Adicionar</button>
			</div>
		</div>
		<div class="row">
			<div class="col-12 mt-5">
				<div class="row">
					<div class="col-md-4 m-md-auto">
						<button class="btn btn-primary btn-lg btn-block" v-bind:disabled="!friends.length" v-on:click="sendFriends">Enviar convites</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<?php get_footer('tributes'); ?>