/*---------------------------------------------------------------------*/ ;
(function($) {
/*================= Global Variable Start =================*/
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var IEbellow9 = !$.support.leadingWhitespace;
var iPhoneAndiPad = /iPhone|iPod/i.test(navigator.userAgent);
var isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;
function isIEver() {var myNav = navigator.userAgent.toLowerCase();return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;}
var ww = document.body.clientWidth, wh = document.body.clientHeight;
var mobilePort = 1024, ipadView = 1024, wideScreen = 1600;
/*================= Global Variable End =================*/
/*================= On Document Load Start =================*/
$(document).ready(function() {
	$('body').removeClass('noJS').addClass("hasJS");
	$(this).scrollTop(0);
	getWidth();
	menuMove();

	if ($(".homeSlider").length) {
	var homeSlider = new Swiper('.homeSlider', {
		effect: 'coverflow',
		loop: true,
		centeredSlides: true,
		slidesPerView: 2,
		coverflowEffect: {
			rotate: 0,
			stretch: 10,
			depth: 400,
			modifier: 1,
			slideShadows : false,
		},
		speed: 700,
		navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			} 
	});
	}
		
	if (screen.width > 1025) {
		var carousel = $("#carousel").featureCarousel({
		  autoPlay: 10000,
		  topPadding:0,
		  sidePadding:0,
		  smallFeatureOffset:150
		});
	}
	
	if (screen.width < 1025) {
		var carousel = $("#carousel").featureCarousel({
		  autoPlay: 10000,
		  topPadding:0,
		  sidePadding:0,
		  smallFeatureOffset:100,
		  sidePadding:0,
		  largeFeatureWidth :.6,
		  largeFeatureHeight:.6,
		  smallFeatureWidth: .3,
		  smallFeatureHeight: .3,
		});
	};
	
	


	if ($(".gallerySlider").length) {
		var gallerySlider = new Swiper('.gallerySlider', {
		loop: false,
		speed: 700,
		navigation: {
			nextEl: ".gallerySliderNavNext",
			prevEl: ".gallerySliderNavPrev",
		},
		breakpoints: {
			576: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			768: {
			  slidesPerView: 3,
			  spaceBetween: 30
			}
		}
		});
	}
	if ($(".gallerySliderNew").length) {
		var gallerySliderNew = new Swiper('.gallerySliderNew', {
		loop: false,
		speed: 700,
		navigation: {
			nextEl: ".gallerySliderNavNextNew",
			prevEl: ".gallerySliderNavPrevNew",
		},
		breakpoints: {
			576: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			768: {
			  slidesPerView: 3,
			  spaceBetween: 30
			}
		}
		});
	}


	if ($(".gallerySlider, .gallerySliderNew").length) { 
	 $('.gallerySlider a, .gallerySliderNew a').magnificPopup({
		  type: 'image',
		  tLoading: 'Loading image #%curr%...',
		  closeBtnInside: false,
		  fixedContentPos: false,
		  removalDelay: 100,
		  mainClass: 'my-mfp-zoom-in',
		  tCounter:false,
		  gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		  },
		  image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
			  return item.el.attr('title');
			}
		  }
		});
	}
		
	//Photo gallery popup
	$('.photoGalleryPopup').magnificPopup({
          type: 'image',
          tLoading: 'Loading image #%curr%...',
		  closeBtnInside: false,
		  removalDelay: 100,
          mainClass: 'my-mfp-zoom-in',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          }
     }); 
	//Single Image popup
	$('.singleImgPopup').magnificPopup({
          type: 'image',
          tLoading: 'Loading image #%curr%...',
		  closeBtnInside: false,
		  removalDelay: 100,
          mainClass: 'my-mfp-zoom-in',
          gallery: false,
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          }
     }); 

		
	$('.popup-youtube').magnificPopup({
		disableOn: 319,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		closeBtnInside: false,
		fixedContentPos: false
	});
	
	
	$('.inlinePopup').magnificPopup({
          type: 'inline',
          fixedContentPos: false,
          fixedBgPos: false,
          overflowY: 'auto',
          closeBtnInside: false,
          preloader: false,
          midClick: true,
          removalDelay: 160,
          mainClass: 'mfp-fade'
        });
	
	// Read more/less	
	if ($(".morelessBtn").length) {
	$('.morelessBtn').click(function() {
	  $(this).prev().slideToggle();
	  if ($(this).text() == "View More") {
		$(this).text("View Less").addClass("lessText")
	  } else {
		$(this).text("View More").removeClass("lessText")
	  }
	});
	}
	
	//On scroll header fixed
	/*$(window).scroll(function(){
		if ($(window).scrollTop() >= 50) {
			$('#header').addClass('headerFixed');
		}
		else {
			$('#header').removeClass('headerFixed');
		}
	});
	if ($(window).scrollTop() >= 50) {
		$('#header').addClass('headerFixed');
	}
	else {
		$('#header').removeClass('headerFixed');
	}*/




	//Site search
	if ($(".search-wrapper").length) {
		$('.toggle-search').click(function(e) {
			e.preventDefault();
			if ($(".search-wrapper").hasClass('open')){
				$('.search-wrapper').removeClass('open');
			}else{
				$('.search-wrapper').addClass('open');
			} 
			return false;
		});
	
		$('.search-wrapper').click(function(e) {
			e.stopPropagation();
		});
		$(document).click(function() {
			$('.search-wrapper').removeClass('open');
		});
		$(".search-close-div").on("click", function(e){
			$(".search-wrapper").removeClass('open');
		});
	}

	//Banner stiky on scroll
	$(document).scroll(function() {
		var st = $(this).scrollTop();
		$(".banner-bg").css({
			"background-position-y": (-st/80)
		});
		$(".bannerDetailWrap").css({
			"top": (-st/2),
			"bottom": (st/2)
		});
	});


	// Move object
	var lFollowX = 0,
		lFollowY = 0,
		x = 0,
		y = 0,
		friction = 1 / 30;
	
	function moveBackground() {
	  x += (lFollowX - x) * friction;
	  y += (lFollowY - y) * friction;
	  
	  translate = 'translate(' + x + 'px, ' + y + 'px)';
		 $('.moveObject').css({
			'-webit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		 });
	  window.requestAnimationFrame(moveBackground);
	}

	$(window).on('mousemove click', function(e) {
	  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
	  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
	  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
	  lFollowY = (10 * lMouseY) / 100;
	});

	moveBackground();
	
	//Paroller
  	$('[data-paroller-factor]').paroller();
	
	//Bootstrap Datepicker
	$(".datepicker").datepicker({ 
        autoclose: true, 
		clearBtn: false,
        todayHighlight: true
    });
  
  
	//footer accordian code
    if ($(window).width() < 768) {
    $(".footerLeft .accHandle").click(function (){
        if($(this).hasClass("acc-active")){
            $(this).removeClass("acc-active");
            $(this).next().slideUp();
        } else{
            $(".footerLeft .accHandle").removeClass("acc-active");
            $(".footerLeft .accDetail").slideUp();
            $(this).next().slideDown();
            $(this).addClass("acc-active");
        }
    });
    }
	
	//External website popup
	$('abackup').not(".litebox, .singleVideoPopup, .colorbox, .popup-youtube").filter(function() {
    	return this.hostname && this.hostname !== location.hostname;
	}).click(function(e) {
    e.preventDefault();
    var url = $(this).attr("href");
    smoke.confirm("You are about to proceed to an external website. Click Yes to proceed.", function(e) {
        if (e) {
            window.open(url, "_blank");
        } else {
            return false;
        }
    }, {
        ok: "Yes",
        cancel: "No",
        classname: "custom-class",
        reverseButtons: true
    });
	});
	
	// Page Scrolling
	$('a[href="#content"]').click(function() {
		skipTo = $(this).attr('href');
		skipTo = $(skipTo).offset().top;
		$('html, body').animate({
			scrollTop: skipTo
		}, '1000');
		return false;
	});
	
	
	// Back to Top function
	if ($("#backtotop").length) {
		$(window).scroll(function() {
			if ($(window).scrollTop() > 120) {
				$('#backtotop').fadeIn('250').css('display', 'block');
			} else {
				$('#backtotop').fadeOut('250');
			}
		});
		$('#backtotop').click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, '200');
			return false;
		});
	};

	// For device checking
	if (isMobile == false) {
		
	};

	/*================= On Document Load and Resize Start =================*/
	$(window).on('resize', function() {
		ww = document.body.clientWidth;
		wh = document.body.clientHeight;           
		if ($("body").hasClass("mobilePort")) {
			$("body").removeClass("wob");
		}
	}).trigger('resize');
	/*================= On Document Load and Resize End =================*/

	//Navigation
	if ($("#navMob").length) {
		if ($(".toggleMenu").length == 0) {
			$("#mainNav").prepend('<div class="menuBar"><a href="#" class="toggleMenu"><span class="iconBar"></span><span class="iconBar"></span><span class="iconBar"></span></a></div>');
		}
		$(".toggleMenu").click(function() {
			$(this).toggleClass("active");

			$("body").addClass("activeMobNav");
			return false;
		});
		$("#navMob li a").each(function() {
			if ($(this).next().length) {
				$(this).parent().addClass("parent");
			};
		})
		$("#navMob li.parent").each(function() {
			if ($(this).has(".menuIcon").length <= 0) $(this).append('<i class="menuIcon fa fa-angle-down"></i>')
		});
		dropdown('nav', 'hover', 1);
		adjustMenu();
	};
	
	$(".custom-file-input").on("change", function() {
		var fileName = $(this).val().split("\\").pop();
		$(this).parent().siblings(".custom-file-label").addClass("selected").html(fileName);
		$(this).next('.custom-file-label').html(fileName);
	});

});
/*================= On Document Load End =================*/

/*================= On Window Resize Start =================*/
$(window).bind('resize orientationchange', function() {
	getWidth();
	adjustMenu();
	menuMove();
});
/*================= On Window Resize End =================*/

/*================= On Window Load Start =================*/
$(window).load(function() {
});
/*================= On Document Load End =================*/

function getWidth() {
	ww = document.body.clientWidth;
	if (ww > wideScreen) {
		$('body').removeClass('device').addClass('desktop widerDesktop');
	}
	if (ww > mobilePort && ww <= wideScreen) {
		$('body').removeClass('device widerDesktop').addClass('desktop');
	}
	if (ww <= mobilePort) {
		$('body').removeClass('desktop widerDesktop').addClass('device');
	}
	if (ww > 767 && ww < 1025) {
		$('body').addClass('ipad');
	} else {
		$('body').removeClass('ipad');
	}
}

})(jQuery);


function validate() {
    return false;
};

// Mobile Menu
function menuMove() {
    if ($(".mobileNav").length == 0) {
        var navigation = $('#nav').clone();
        $(navigation).appendTo("body").wrap("<div class='mobileNav'></div>");
        if ($(".mobileNav #navMob").length == 0) {
            $(".mobileNav #nav").attr("id", "navMob");
            $(".mobileNav").append("<span class='menuClose'><i class='fa fa-times'></i></span>");
            //$(".mobileNav").append("<span class='logoText'><span class='logoIcon homeSprite'></span></span>");
            $(".mobileNav .menuClose").click(function() {
                $("body").removeClass("activeMobNav");
            });
        }
    }
}



