$(function () {

	$('html').flowtype({
		minimum: 500,
		maximum: 1200,
		minFont: 14,
		maxFont: 16,
		fontRatio: 70
	});

	var bannerContentSlider = $('.banner__content-slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: false,
		asNavFor: '.banner__slider',
		fade: true,
		speed: 400,
		touchThreshold: 100,
	})

	var bannerSlider = $('.banner__slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: false,
		speed: 400,
		asNavFor: '.banner__content-slider'
	})


	$('.prev-banner').on('click', function () {
		$(bannerSlider).slick('slickPrev');
		$(bannerContentSlider).slick('slickPrev');
	});

	$('.next-banner').on('click', function () {
		$(bannerSlider).slick('slickNext');
		$(bannerContentSlider).slick('slickNext');

	});


	$('.banner__content-slider .banner__title').removeClass("animated faster fadeInRight");
	$('.banner__content-slider .slick-current .banner__title').addClass("animated faster fadeInRight");
	$('.banner__content-slider .banner__text').removeClass("animated faster fadeInRight");
	$('.banner__content-slider .slick-current .banner__text').addClass("animated faster fadeInRight");
	$('.banner__content-slider .btn').removeClass("animated faster fadeInRight");
	$('.banner__content-slider .slick-current .btn').addClass("animated faster fadeInRight");


	bannerContentSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
		$('.banner__content-slider .banner__title').removeClass("animated faster fadeInRight");
		$('.banner__content-slider .slick-current .banner__title').addClass("animated faster fadeInRight");
		$('.banner__content-slider .banner__text').removeClass("animated faster fadeInRight");
		$('.banner__content-slider .slick-current .banner__text').addClass("animated faster fadeInRight");
		$('.banner__content-slider .btn').removeClass("animated faster fadeInRight");
		$('.banner__content-slider .slick-current .btn').addClass("animated faster fadeInRight");
	});

	var aboutContentSlider = $('.about-us__content-slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: false,
		asNavFor: '.about-us__slider',
		fade: true,
		touchThreshold: 100,
		speed: 400,

	})

	var aboutSlider = $('.about-us__slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: false,
		speed: 400,
		asNavFor: '.about-us__content-slider'
	})


	$('.prev-about-us').on('click', function () {
		$(aboutSlider).slick('slickPrev');
		$(aboutContentSlider).slick('slickPrev');
	});

	$('.next-about-us').on('click', function () {
		$(aboutSlider).slick('slickNext');
		$(aboutContentSlider).slick('slickNext');

	});

	$('.about-us__content-slider .about-us__title').removeClass("animated faster fadeInRight");
	$('.about-us__content-slider .about-us__text').removeClass("animated faster fadeInRight");
	$('.about-us__content-slider .slick-current .about-us__title').addClass("animated faster fadeInRight");
	$('.about-us__content-slider .slick-current .about-us__text').addClass("animated faster fadeInRight");

	aboutContentSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
		$('.about-us__content-slider .about-us__title').removeClass("animated faster fadeInRight");
		$('.about-us__content-slider .about-us__text').removeClass("animated faster fadeInRight");
		$('.about-us__content-slider .slick-current .about-us__title').addClass("animated faster fadeInRight");
		$('.about-us__content-slider .slick-current .about-us__text').addClass("animated faster fadeInRight");
	});

	var catalogSlider = $('.catalog__slider').slick({
		slidesToShow: 5,
		dots: true,
		touchThreshold: 1000,
		swipeToSlide: true,
		arrows: false,
		infinite: true,
		responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				}
			},
		]
	});

	$('#prev2').on('click', function () {
		$(catalogSlider).slick('slickPrev');
	});

	$('#next2').on('click', function () {
		$(catalogSlider).slick('slickNext');
	});

	// $('.catalog__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 	$('.slick-dots').children(('li')).children('button').css('transform', 'translateX(0px)')
	// 	if ((currentSlide-nextSlide) < 0) {
	// 	} else {
	// 	}


	// });


	$('.header__menu-list--wrapper').children().children().children('a').on('click', function (event) {
		event.preventDefault();
		$(this).parents('li').toggleClass('active');
		$(this).siblings('.header__menu-sublist').slideToggle()
	})


	$('#hamb').on('click', function () {
		$('.body-container').toggleClass('active')
		$(this).toggleClass('active');
		// $('.header-wrapper').toggleClass('active');
		$('.bg-dark').toggleClass('active');
		$('#header__menu-list').toggleClass('fadeInDown')
		$('#header__menu-list').toggleClass('fadeOutUp')
	});

	$('#hamb-small').on('click', function () {
		$('body').toggleClass('active')
		$(this).toggleClass('active');
		// $('.header-wrapper').toggleClass('active');
		$('.bg-dark').toggleClass('active');
		$('#header__menu-list-small').toggleClass('active')
	});


	var cbpAnimatedHeader = (function () {

		var docElem = document.documentElement,
			header = document.querySelector('.header-wrapper--small'),
			didScroll = false,
			changeHeaderOn = 200;

		function init() {
			window.addEventListener('scroll', function (event) {
				if (!didScroll) {
					didScroll = true;
					setTimeout(scrollPage, 0);
				}
			}, false);
		}

		function scrollPage() {
			var sy = scrollY();
			if (sy >= changeHeaderOn) {
				header.classList.add('header-small--visible');
			} else {
				header.classList.remove('header-small--visible');
			}
			didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}

		init();

	})()

	$('.input-text').on('input', function (e) {
		if (e.target.value !== '') {
			$(this).css('border-bottom', '2px solid #1a1a1a');
		} else {
			$(this).css('border-bottom', '2px solid #cccccc');
		}
	});

	// $('.input-text').focus(function (e) {
	// 	$(this).siblings('label').css({
	// 		'color': '#999999',
	// 		'transform': 'translate(0)',
	// 		'font-size': '0.875em'
	// 	});
	// })
	$('.input-text').blur(function (e) {
		if (e.target.value == '') {
			$(this).siblings('label').css({
				'color': '#1a1a1a',
				'transform': 'translatey(1.25rem)',
				'font-size': '1em'
			});
		}
	});

	$('.input-text').focus(function (e) {
		$(this).siblings('label').css({
			'color': '#999999',
			'transform': 'translate(0)',
			'font-size': '0.875em'
		});
	})
	$('.textarinput-textea').blur(function (e) {
		if (e.target.value == '') {
			$(this).siblings('label').css({
				'color': '#1a1a1a',
				'transform': 'translatey(1.25rem)',
				'font-size': '1em'
			});
		}
	});

	$('.input-text').on('input', function (e) {
		if (e.target.value !== '') {
			$(this).css('border-bottom', '2px solid #1a1a1a');
		} else {
			$(this).css('border-bottom', '2px solid #cccccc');
		}
	});

	(jQuery);
	! function (t, e, i, n) {
		function s(e, i) {
			this.element = e, this.$element = t(e), this.init()
		}
		var h = "textareaAutoSize",
			o = "plugin_" + h,
			r = function (t) {
				return t.replace(/\s/g, "").length > 0
			};
		s.prototype = {
			init: function () {
				var i = parseInt(this.$element.css("paddingBottom")) + parseInt(this.$element.css("paddingTop")) + parseInt(this.$element.css("borderTopWidth")) + parseInt(this.$element.css("borderBottomWidth")) || 0;
				r(this.element.value) && this.$element.height(this.element.scrollHeight - i), this.$element.on("input keyup", function (n) {
					var s = t(e),
						h = s.scrollTop();
					t(this).height(0).height(this.scrollHeight - i), s.scrollTop(h)
				})
			}
		}, t.fn[h] = function (e) {
			return this.each(function () {
				t.data(this, o) || t.data(this, o, new s(this, e))
			}), this
		}
	}(jQuery, window, document);

	$('textarea.js-auto-size').textareaAutoSize()


	// setTimeout( function() {

	// 	$(".body-container").css('padding-top', $('.header-wrapper').height());
	// 	// $(".header__menu-list").css('top', $('.header-wrapper').height());

	// }, 1000)

	// $(window).resize(function () {
	// 	setTimeout( function() {
	// 		$(".body-container").css('padding-top', $('.header-wrapper').height());
	// 		// $(".header__menu-list").css('top', $('.header-wrapper').height());
	// 	}, 1000)
	// });

	$(function () {
		$('.parent').click(function () {
			$(this).nextUntil('.parent', 'tr.child').slideToggle();
			$(this).toggleClass('open');
		});
	});

	// $('.nav-buttons__item').on('click', function(){
	// 	if ( $(this).hasClass('active') ) {
	// 		$(this).removeClass('active');
	// 	} else {
	// 		$('.nav-buttons__item').removeClass('active');
	// 		$(this).addClass('active');
	// 	}
	// })

	$('.filter__item').on('click', function () {
		$(this).toggleClass('active')
	})

	$('.your-orders__item').on('click', function () {
		$(this).toggleClass('active')
	})

	$('.tab2__input').blur(function (e) {
		if (e.target.value == '') {
			$(this).siblings('span').css({
				'transform': 'translate(1em, 2.325em)',
				'font-size': '1em'
			});
		}
	});

	$('.tab2__input').focus(function (e) {
		$(this).siblings('span').css({
			'transform': 'translate(0)',
			'font-size': '0.875em'
		});
	})

	// var $myGroup = $('#accordion');
	// $myGroup.on('show.bs.collapse','.collapse', function() {
	// 		$myGroup.find('.your-orders__details').collapse('hide');
	// });


	$(document).mouseup(function (e) {
		if ($('.director-content--wrapper').hasClass('active')) {
			var div = $(".form-main"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&&
				div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.director-content--wrapper').removeClass('active'); // скрываем его
			}
		}

	});

	$('.form-close').on('click', function () {
		$('.director-content--wrapper').removeClass('active')
	})

	$('.director-btn').on('click', function () {
		$('.director-content--wrapper').toggleClass('active')
	})

	$(".go-top").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body, html').animate({
			scrollTop: top
		}, 350);
	});

	$(window).scroll(function () {
		var offset = $('#main').offset();
		if ($(this).scrollTop() > offset.top) {
			$('.go-top').css('display', 'block');
		} else {
			$('.go-top').css('display', 'none');
		}
	});


	$('.header__search').on('click', function () {
		$(this).toggleClass('active');
		$('.header__nav').toggleClass('hidden')
		$('.search-label').toggleClass('active');
	})

	$('.search-label__close').on('click', function () {
		$('.search-label').removeClass('active');
		$('.header__search').removeClass('active');
		$('.header__nav').removeClass('hidden');
	});


	// $('.search-label').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
	// 	if ( $('.header__search').hasClass('active') ) {
	// 	$('.header__search').removeClass('active'); 
	// 	}
	// })

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	$('.addres-city').on('click', function () {
		$('.addres-city').removeClass('active')
		$(this).addClass('active')
		if ($('.addres-city.nsk').hasClass('active')) {
			$('.footer-angle--top').addClass('nsk')
			$('.footer-angle--bottom').addClass('nsk')
		} else {
			$('.footer-angle--top').removeClass('nsk')
			$('.footer-angle--bottom').removeClass('nsk')
		}
	});

	$('#header__cart').on('click', function () {
		$(this).toggleClass('active')
		$('#cart-list').toggleClass('active');
	});

	$("#header__cart").mouseover(function () {
		$("#cart-list").addClass('hover');
	});
	$("#header__cart").mouseout(function () {
		$("#cart-list").removeClass('hover');
	});

	$('#header__cart-small').on('click', function () {
		$(this).toggleClass('active')
		$('#cart-list-small').toggleClass('active');
	});

	$("#header__cart-small").mouseover(function () {
		$("#cart-list-small").addClass('hover');
	});
	$("#header__cart-small").mouseout(function () {
		$("#cart-list-small").removeClass('hover');
	});



});

var barnaul = [53.344371, 83.720846]
		nsk = [55.084132, 82.977778]

$('.addres-city').on('click', function () {
	myMap.destroy();
	if ($(this).hasClass('nsk')) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
					center: nsk,
					zoom: 18,
					controls: []
				}),
				// Создаём макет содержимого.
				MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
				),

				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'Собственный значок метки',
					balloonContent: 'Это красивая метка'
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'img/maps.png',
					// Размеры метки.
					iconImageSize: [64, 64],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-25, -58]
				}),

				myPlacemarkWithContent = new ymaps.Placemark([53.344471, 83.720946], {
					hintContent: 'Собственный значок метки с контентом',
					balloonContent: 'А эта — новогодняя',
					iconContent: ''
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/maыps.png',
					// Размеры метки.
					iconImageSize: [64, 64],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-32, -32],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
				});

			myMap.geoObjects
				.add(myPlacemark)
				.add(myPlacemarkWithContent);
		});
	} else {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
					center: barnaul,
					zoom: 18,
					controls: []
				}),
				// Создаём макет содержимого.
				MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
				),

				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'Собственный значок метки',
					balloonContent: 'Это красивая метка'
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'img/maps.png',
					// Размеры метки.
					iconImageSize: [64, 64],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-25, -58]
				}),

				myPlacemarkWithContent = new ymaps.Placemark([53.344471, 83.720946], {
					hintContent: 'Собственный значок метки с контентом',
					balloonContent: 'А эта — новогодняя',
					iconContent: ''
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/maыps.png',
					// Размеры метки.
					iconImageSize: [64, 64],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-32, -32],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
				});

			myMap.geoObjects
				.add(myPlacemark)
				.add(myPlacemarkWithContent);
		});
	}
})


ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
			center: nsk,
			zoom: 18,
			controls: []
		}),
		// Создаём макет содержимого.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'Собственный значок метки',
			balloonContent: 'Это красивая метка'
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: 'img/maps.png',
			// Размеры метки.
			iconImageSize: [64, 64],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-25, -58]
		}),

		myPlacemarkWithContent = new ymaps.Placemark([53.344471, 83.720946], {
			hintContent: 'Собственный значок метки с контентом',
			balloonContent: 'А эта — новогодняя',
			iconContent: ''
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: 'img/maыps.png',
			// Размеры метки.
			iconImageSize: [64, 64],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-32, -32],
			// Смещение слоя с содержимым относительно слоя с картинкой.
			iconContentOffset: [15, 15],
			// Макет содержимого.
			iconContentLayout: MyIconContentLayout
		});

	myMap.geoObjects
		.add(myPlacemark)
		.add(myPlacemarkWithContent);
});

const tabLinks = document.querySelectorAll(".nav-buttons__item");
const tabPanels = document.querySelectorAll(".lk-tab");

for (let el of tabLinks) {
	el.addEventListener("click", e => {
		e.preventDefault();

		document.querySelector('.nav-buttons__item.active').classList.remove("active");
		document.querySelector('.lk-tab.active').classList.remove("active");

		const parentListItem = el.parentElement;
		parentList.classList.add("active");
		const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

		const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
		panel[0].classList.add("active");

	});
}