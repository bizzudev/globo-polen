// const home_carrousel = function() {
// 	const images = document.querySelectorAll(".top-banner .carrousel .image");
// 	console.log(images);
// }

// home_carrousel();

jQuery(document).ready(function ($) {
	$('#top-carousel').owlCarousel({
		loop: true,
		items: 1,
		autoplayTimeout: 5000,
		animateOut: 'fadeOut',
		autoplayHoverPause:true,
		margin: 0,
		nav: true,
		autoplay: true,
		dots: true,
		autoHeight:false,
		navText: ["<i class='icon icon-left-arrow'></i>", "<i class='icon icon-right-arrow'></i>"],
	});
	$('#product-carousel').owlCarousel({
		loop: true,
		items: 1,
		autoplayTimeout: 5000,
		animateOut: 'fadeOut',
		autoplayHoverPause:true,
		margin: 0,
		nav: false,
		autoplay: true,
		dots: true,
		autoHeight:false,
	});
	$('#how-to-carousel').owlCarousel({
		loop: true,
		items: 1,
		autoplayTimeout: 5000,
		animateOut: 'fadeOut',
		autoplayHoverPause:true,
		margin: 0,
		nav: false,
		autoplay: true,
		dots: true,
		autoHeight:false,
	});
  $('#videos-carousel').owlCarousel({
    loop: false,
    stagePadding: 15,
    items: 4,
    animateOut: 'fadeOut',
    margin: 5,
    nav: false,
    dots: true,
    autoHeight:false,
    navText: ["<i class='icon icon-left-arrow'></i>", "<i class='icon icon-right-arrow'></i>"],
    responsive : {
        0 : {
          items: 2,
        },
        700 : {
          items: 3,
        },
        1020 : {
          items: 4,
        }
    }
  });
});

// const home_video = function () {
// 	const video_banner = document.getElementById("video-banner");
// 	if(!video_banner) {
// 		return;
// 	}

// 	let currentVideo = polIsSmall()
// 		? home_video.mobile.class
// 		: home_video.desktop.class;

// 	function polIsSmall() {
// 		return window.innerWidth < 670;
// 	}

// 	function changeVideo(obj) {
// 		currentVideo = obj.class;
// 		const sources = video_banner.getElementsByTagName("source");

// 		video_banner.setAttribute("poster", obj.poster);
// 		sources[0].src = obj.video;
// 		video_banner.load();
// 	}

// 	function checkSize() {
// 		if (polIsSmall()) {
// 			currentVideo !== home_video.mobile.class &&
// 				changeVideo(home_video.mobile);
// 		} else {
// 			currentVideo !== home_video.desktop.class &&
// 				changeVideo(home_video.desktop);
// 		}
// 	}

// 	window.onresize = checkSize;
// };

// home_video();


