
$('.cat-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
  dots: true,
  // prevArrow: $('.prev'),
  // nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 998,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
});

$('.also-slider').slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 3,
  arrows: true,
  dots: true,
  // prevArrow: $('.prev'),
  // nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
});

$(window).ready(function() {
  $('.flexslider').flexslider({
  animation: "slide",
  controlNav: "thumbnails",
  arrows: false,
  });
});

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
  }); 

  $(document).ready(function(c) {
    $('.close3').on('click', function(c){
      $('.cart-header2').fadeOut('slow', function(c){
        $('.cart-header2').remove();
      });
      });	  
    });

  $(document).ready(function(c) {
    $('.close2').on('click', function(c){
      $('.cart-header1').fadeOut('slow', function(c){
        $('.cart-header1').remove();
      });
      });	  
    });

  $(document).ready(function(c) {
    $('.close1').on('click', function(c){
      $('.cart-header').fadeOut('slow', function(c){
        $('.cart-header').remove();
      });
      });	  
    });

    $(document).ready(function() {
			$('.minus').click(function () {
				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
			$('.plus').click(function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});
		});

    function menu(){
      const searchBtn = document.querySelector(".search-icon");
      const cancelBtn = document.querySelector(".cancel-icon");
      const form = document.querySelector("form");
      cancelBtn.onclick = ()=>{
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        form.classList.remove("active");
        cancelBtn.style.color = "#ff3d00";
      }
      searchBtn.onclick = ()=>{
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
      }
  }
  menu()