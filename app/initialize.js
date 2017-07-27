import $ from "jquery"
import fullpage from 'fullpage.js'
import slick from 'slick-carousel'

$(document).ready(function($) {
  $('#fullpage').fullpage({
    anchors:['page-1','page-2', 'page-3', 'page-4', 'page-5', 'page-6', 'page-7', 'page-8', 'page-9', 'page-10'],
    menu:' #menu',
    navigation: true,
    navigationPosition: 'left'
  });
})

//function initSlick () {
//  $('.features-list').slick({
//    infinite: true,
//    arrows: false,
//    slidesToShow: 3,
//    slidesToScroll: 3,
//    dots: true,
//    autoplay: true,
//    autoplaySpeed: 2000,
//    responsive: [
//      {
//        breakpoint: 1024,
//        settings: {
//          slidesToShow: 2,
//          slidesToScroll: 2
//        }
//      },
//      {
//        breakpoint: 768,
//        settings: {
//          slidesToShow: 1,
//          slidesToScroll: 1
//        }
//      },
//    ]
//  })
//}

$('.section3__big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2500
});

$('.section3__min-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2500
});

$('.section9__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2500
});

$('.section9__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.section9__counter-big').text('0' + (nextSlide + 1));
  console.log(currentSlide);
  //console.log(nextSlide);
});

$(document).ready(() => {
  initSlick()
})
