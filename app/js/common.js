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
		speed: 100,
		touchThreshold: 100,
	})

	var bannerSlider = $('.banner__slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: false,
		speed: 200,
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
	
	var aboutContentSlider = $('.about-us__content-slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: false,
		asNavFor: '.about-us__slider',
		fade: true,
		touchThreshold: 100,
	})

	var aboutSlider = $('.about-us__slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: false,
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

	var catalogSlider = $('.catalog__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		touchThreshold: 100,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
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


	$('.header__menu-left').on('click', function () {
		$('.body-container').toggleClass('active')
		$(this).toggleClass('active');
		// $('.header-wrapper').toggleClass('active');
		$('.bg-dark').toggleClass('active');
		$('.header__menu-list').toggleClass('fadeInDown')
		$('.header__menu-list').toggleClass('fadeOutUp')
	});


	var cbpAnimatedHeader = (function () {

		var docElem = document.documentElement,
			header = document.querySelector('.header-wrapper'),
			didScroll = false,
			changeHeaderOn = 530;

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
				header.classList.add('header-wrapper--small');
			} else {
				header.classList.remove('header-wrapper--small');
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

	$('.director-btn').on('click', function () {
		$('.director-content--wrapper').toggleClass('active')
	})

	setTimeout( function() {
		
		$(".body-container").css('padding-top', $('.header-wrapper').height());
		// $(".header__menu-list").css('top', $('.header-wrapper').height());

	}, 1000)

	$(window).resize(function () {
		setTimeout( function() {
			$(".body-container").css('padding-top', $('.header-wrapper').height());
			// $(".header__menu-list").css('top', $('.header-wrapper').height());
		}, 1000)
	});

	$(function() {
		$('.parent').click(function() {
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

	$('.filter__item').on('click', function(){
		$(this).toggleClass('active')
	})

	$('.your-orders__item').on('click', function(){
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




});

const tabLinks = document.querySelectorAll(".nav-buttons__item");
const tabPanels = document.querySelectorAll(".lk-tab");
 
for(let el of tabLinks) {
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