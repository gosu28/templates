if ($('#back-to-top').length) {
  var scrollTrigger = 100,
      backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
              $('#back-to-top').addClass('show');
          } else {
              $('#back-to-top').removeClass('show');
          }
      };
  backToTop();
  $(window).on('scroll', function () {
      backToTop();
  });
  $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 700);
  });
}

$('.slider-bg').owlCarousel({
  item:1,
  loop:true,
  margin:10,
  autoplay:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:true
      },
      1000:{
          items:1,
          nav:true,
          loop:true
      }
  }
});
$('.slider-product').owlCarousel({
  item:1,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:3,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})

