$(document).ready(function($) {
  "use strict";

  // Sticky Menu
 
    $(window).on('scroll', function(){
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $(".header-navbar").addClass("nav-sticky");
    } else {
      $(".header-navbar").removeClass("nav-sticky");
    }
  });
   
 
    $(window).on('load', function(){
  // isotope portfolio
  var $container = $('.portfolioContainer');
    $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });

  
    $('.portfolioFilter a').on('click', function(){
    $('.portfolioFilter .active').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });
});  
 
  // owlCarousel

  $('.testimonial-slider').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    margin: 30,
    navText: false,
    responsive: {
      0: {
        items: 1,

      },
      992: {
        items: 2,

      },
      1200: {
        items: 3,

      }
    }
  })
  $('.feature-slider').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,

      },
      992: {
        items: 2,

      }
    }
  })
  // Smothlyscroll

  var scrollsmoth = function() {


    $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
      event.preventDefault();

      var href = $.attr(this, 'href');

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top - 70
      }, 500, function() {
        // window.location.hash = href;
      });
    });

  };

  scrollsmoth();
  
  // SmothlyscrollActive
  var nav_sections = $('section');
  var main_nav = $('.navbar-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".navbar-nav li:first").addClass('active');
      }
    });
  });
  // Aos Js
  AOS.init({
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',

  });
  // Counter Js
  $(window).on('load', function() {
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

  });


 
  // Magnific Popup
  $('.portfolio-icon').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    }
  });
  // youtube video
  $('.youtube-video').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',

          id: 'v=',
          src: 'http://www.youtube.com/embed/%id%?autoplay=1'
        },

      },
      srcAction: 'iframe_src',
    }
  });


}(jQuery));