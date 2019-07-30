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
		$('#header__menu-list').toggleClass('active')
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

	$(".tab_select").change(function(){
		if($(this).val() !== ''){
				$(this).siblings('span').css({
					'transform': 'translate(0)',
					'font-size': '0.875em'
				});
		} else {
			$(this).siblings('span').css({
				'transform': 'translate(1em, 2.325em)',
				'font-size': '1em'
			});
		}
	});

	( function( factory ) {
		if ( typeof define === "function" && define.amd ) {
	
			// AMD. Register as an anonymous module.
			define( [ "../widgets/datepicker" ], factory );
		} else {
	
			// Browser globals
			factory( jQuery.datepicker );
		}
	}( function( datepicker ) {
	
	datepicker.regional.ru = {
		closeText: "Закрыть",
		prevText: "Пред",
		nextText: "След",
		currentText: "Сегодня",
		monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
		"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
		monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
		"Июл","Авг","Сен","Окт","Ноя","Дек" ],
		dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
		dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
		dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
		weekHeader: "Нед",
		dateFormat: "dd.mm.yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
	datepicker.setDefaults( datepicker.regional.ru );
	
	return datepicker.regional.ru;
} ) );	

	$( "#datepicker" ).datepicker();

	$('.ui-datepicker-calendar').on('click', function(){
		alert($(this).width())
	})


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
		$('.header__search').toggleClass('active');
		$('.header__nav').toggleClass('hidden')
		$('.search-label').toggleClass('active');
	})

	$('.search-label__close').on('click', function () {
		$('.search-label').removeClass('active');
		$('.header__search').removeClass('active');
		$('.header__nav').removeClass('hidden');
	});

	$(".header__menu").mouseleave(function () {
		$('.search-label').removeClass('active');
		$('.header__search').removeClass('active');
		$('.header__nav').removeClass('hidden');
	});


	// $('.header__search').on('click', function () {
	// 	if ( $('.header__search').hasClass('active') ) {
	// 		$('.search-label').removeClass('active')
	// 		$('.header__search').removeClass('active')
	// 		$('.search-label').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
	// 			$('.header__nav').removeClass('hidden')
	// 		})
	// 	} else {

	// 		$('.search-label').addClass('active')
	// 		$('.header__nav').addClass('hidden')
	// 		setTimeout()
	// 		$('.search-label').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
	// 			$('.header__search').addClass('active');
	// 		})

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

	$('.catalog-filter__toogle-btn').on('click', function () {
		$('.body-container').toggleClass('active')
		$(this).toggleClass('active');
		$('.bg-dark').toggleClass('active');
		$('aside').toggleClass('active')
	})

	$(document).mouseup(function (e) {
		if ($('aside').hasClass('active')) {
			var div = $("aside"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&&
				div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.body-container').removeClass('active')
				$('.catalog-filter__toogle-btn').removeClass('active');
				$('.bg-dark').removeClass('active');
				$('aside').removeClass('active') // скрываем его
			}
		}
	});

	$('.sorting__icon--1').on('click', function () {
		$(this).addClass('active')
		$('.sorting__icon--2').removeClass('active')
		$('.catalog-list').removeClass('catalog-list--list')
	})

	$('.sorting__icon--2').on('click', function () {
		$(this).addClass('active')
		$('.sorting__icon--1').removeClass('active')
		$('.catalog-list').addClass('catalog-list--list')
	})

	$('.link-seo').on('click', function () {
		event.preventDefault();
		$(this).toggleClass('active');
		$('.exa').slideToggle();
		if ($(this).hasClass('active')) {
			$(this).html('Скрыть')
		} else {
			$(this).html('Показать еще')
		}
	})


	$('.catalog-filter__input--checked').on('input', function (e) {
		if (e.target.value !== '') {
			var posTop = $(this).offset().top
			posLeft = $('.catalog-filter__show-btn').offset().left
			$('.catalog-filter__show-btn').addClass('active')
			$('.catalog-filter__show-btn').offset({
				top: posTop,
				left: posLeft
			})
		}
		setTimeout(function () {
			$('.catalog-filter__show-btn').removeClass('active')
		}, 2000);

	});


	$(window).resize(function () {
		if ($(window).width() < 576) {
			$('.catalog-list').removeClass('catalog-list--list')
		}
	});


	$('.card-item__photo').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.card-item__thumbs'
		
	})

	$('.card-item__thumbs').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.card-item__photo',
		focusOnSelect: true,
		arrows: false,
	})

  $('.catalog-card__minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
});
$('.catalog-card__plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
});


$( "#tabs" ).tabs({
	active: 4

});


$('.card-item__property').accordion();

});

	


















var barnaul = [53.344371, 83.720846]
nsk = [55.084132, 82.977778]

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
			center: barnaul,
			zoom: 16,
			controls: []
		}),
		// Создаём макет содержимого.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'ОФИС В БАРНАУЛЕ',
			balloonContent: 'ул. Автотранспортная, 39'
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

		myPlacemarkWithContent = new ymaps.Placemark(nsk, {
			hintContent: 'ОФИС В НОВОСИБИРСКЕ',
			balloonContent: 'Новосибирск, Писемского, 24/2',
			iconContent: ''
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: 'img/maps.png',
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

	$('.addres-city').on('click', function () {
		if ($(this).hasClass('nsk')) {
			myMap.setCenter(nsk);
		} else {
			myMap.setCenter(barnaul);
		}
	});


});









// const tabLinks = document.querySelectorAll(".nav-buttons__item");
// const tabPanels = document.querySelectorAll(".lk-tab");

// for (let el of tabLinks) {
// 	el.addEventListener("click", e => {
// 		e.preventDefault();

// 		document.querySelector('.nav-buttons__item.active').classList.remove("active");
// 		document.querySelector('.lk-tab.active').classList.remove("active");

// 		const parentListItem = el.parentElement;
// 		parentList.classList.add("active");
// 		const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

// 		const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
// 		panel[0].classList.add("active");

// 	});
// }