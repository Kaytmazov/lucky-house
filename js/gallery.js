$('.gallery-for').slick({
  mobileFirst: true,
  arrows: true,
  asNavFor: '.gallery-nav',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        draggable: false,
        fade: true
      }
    }
  ]
});

$('.gallery-nav').slick({
  mobileFirst: true,
  slidesToShow: 6,
  prevArrow: '<i class="icon nav-prev"></i>',
  nextArrow: '<i class="icon nav-next"></i>',
  asNavFor: '.gallery-for',
  focusOnSelect: true
});