$(function() {

	$('body').flowtype({
		minimum   : 500,
		maximum   : 1200,
		minFont   : 12,
		maxFont   : 16,
		fontRatio : 70
	 });

var bannerContentSlider =	$('.banner__content-slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: false,
	})

var bannerSlider =	$('.banner__slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: false,
	})


	$('#prev1').on('click', function () {
		$(bannerSlider).slick('slickPrev');
		$(bannerContentSlider).slick('slickPrev');
	});

	$('#next1').on('click', function () {
		$(bannerSlider).slick('slickNext');
		$(bannerContentSlider).slick('slickNext');

	});

var catalogSlider =	$('.catalog__slider').slick({
		slidesToShow: 6,
		dots: true,
		arrows: false,
	})

	$('#prev2').on('click', function () {
			$(catalogSlider).slick('slickPrev');
		});

	$('#next2').on('click', function () {
			$(catalogSlider).slick('slickNext');
		});

	$('.header__menu-list--wrapper').children().children().children('a').on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(this).siblings('.header__menu-sublist').slideToggle()
	})


	$('.header__menu-left').on('click', function () {
		$(this).toggleClass('active');
		$('.header__menu-list').toggleClass('fadeInDown') 
		$('.header__menu-list').toggleClass('fadeOutUp') 
	});
});
