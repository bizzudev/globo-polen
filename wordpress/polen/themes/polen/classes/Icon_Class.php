<?php

class Icon_Class
{
	public static function polen_icon_card($name)
	{
		echo '<span class="svg-icon svg-' . $name . ' svg-' . $name . '-dims"></span>';
	}

	public static function polen_icon_phone()
	{
		echo '<i class="icon icon-phone"></i>';
	}

	public static function polen_icon_camera_video()
	{
		echo '<i class="icon icon-camera-video"></i>';
	}

	public static function polen_icon_hand_thumbs_up()
	{
		echo '<i class="icon icon-hand-thumbs-up"></i>';
	}

	public static function polen_icon_check_o()
	{
		echo '<i class="bi bi-check-circle"></i>';
	}

	public static function polen_icon_exclamation_o()
	{
		echo '<i class="bi bi-exclamation-circle"></i>';
	}

	public static function polen_icon_checkmark()
	{
		echo '<i class="bi bi-check"></i>';
	}

	public static function polen_icon_reload()
	{
		echo '<i class="bi bi-arrow-clockwise"></i>';
	}

	public static function polen_icon_share()
	{
		echo '<i class="bi bi-share-fill"></i>';
	}

	public static function polen_icon_clock()
	{
		echo '<i class="bi bi-clock"></i>';
	}

	public static function polen_icon_star($active = false)
	{
		if ($active) {
			echo '<i class="bi bi-star-fill" style="color: #FFF963;"></i>';
		} else {
			echo '<i class="bi bi-star"></i>';
		}
	}

	public static function polen_icon_arrows()
	{
		echo '<img src="' . TEMPLATE_URI . '/assets/img/arrows.png" />';
	}

	public static function polen_icon_accept_reject($type = 'accept')
	{
		if ($type === 'reject') {
			echo '<i class="bi bi-x"></i>';
		} else {
			echo '<i class="bi bi-check"></i>';
		}
	}

	public static function polen_icon_upload()
	{
		echo '<i class="bi bi-cloud-arrow-up"></i>';
	}

	public static function polen_icon_download()
	{
		echo '<i class="bi bi-download"></i>';
	}

	public static function polen_icon_copy()
	{
		echo '<i class="bi bi-clipboard"></i>';
	}

	public static function polen_icon_chevron()
	{
		echo '<i class="bi bi-chevron-down"></i>';
	}

	public static function polen_icon_chevron_right()
	{
		echo '<i class="bi bi-chevron-right"></i>';
	}

	public static function polen_icon_chevron_left()
	{
		echo '<i class="bi bi-chevron-left"></i>';
	}

	public static function polen_icon_close()
	{
		echo '<i class="bi bi-x"></i>';
	}

	public static function polen_icon_trash() {
		echo '<i class="icon icon-trash"></i>';
	}

	public static function polen_icon_social($ico)
	{
		$ret = '';
		switch ($ico) {
			case 'facebook':
				$ret = '<i class="icon icon-facebook"></i>';
				break;

			case 'instagram':
				$ret = '<i class="icon icon-instagram"></i>';
				break;

			case 'linkedin':
				$ret = '<i class="icon icon-linkedin"></i>';
				break;

			case 'twitter':
				$ret = '<i class="icon icon-twitter"></i>';
				break;

			default:
				$ret = '';
				break;
		}

		echo $ret;
	}
}
