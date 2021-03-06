import $ from 'jquery'
import fullpage from 'fullpage.js'
import slick from 'slick-carousel'
import fancybox from 'fancybox'
import validation from 'jquery-validation'
import htmlToCanvas from 'html2canvas'

var mainNavLinks = $('.main-nav li a')

$(document).ready(function($) {
  $('#fullpage').fullpage({
    anchors:['page-1','page-2', 'page-3', 'page-4', 'page-5', 'page-6', 'page-7', 'page-8', 'page-9', 'page-10'],
    menu:' #menu',
    navigation: true,
    navigationPosition: 'left',
    responsiveWidth: 961,
    afterLoad: function(page) {
      if ($(document).width() > 940) {
        if(page === 'page-1') {
          var duration = 400;
          var elements = $('.section1__features-item')
          elements.each(function(index) {
            $(this).delay(duration * index).queue(function(){
              $(this).addClass('fadeInUp').dequeue();
            })
          });
        };
        if(!(page === 'page-1')) {
          $('.section1__features-item').css('opacity', 0);
          $('.section1__features-item').removeClass('fadeInUp');
        };

        if(page === 'page-2') {
          var duration = 400;
          var elements = $('.section2__item');
          var elementsGoodPosition = [];

          elementsGoodPosition[0] = elements[1]
          elementsGoodPosition[1] = elements[2]
          elementsGoodPosition[2] = elements[0]

          function addFade (index) {
            elementsGoodPosition[index].classList.add('fadeInUp');
          }

          for (var i = 0; elementsGoodPosition.length > i; i++) {
            var timeout = duration * i
            setTimeout(addFade, timeout, i);
          };
        };

        if(!(page === 'page-2')) {
          $('.section2__item').css('opacity', 0);
          $('.section2__item').removeClass('fadeInUp');
        };

        if(page === 'page-4') {
          var duration = 300;
          var elements = $('.section4__seven, .section4__passport-item');

          elements.each(function(index) {
            $(this).delay(duration * index).queue(function() {
              $(this).addClass('fadeIn').dequeue();
            })
          });
        }

        if(!(page === 'page-4')) {
          $('.section4__seven, .section4__passport-item').css('opacity', 0);
          $('.section4__seven, .section4__passport-item').removeClass('fadeIn');
        };

        if(page === 'page-6') {
          var duration = 300;
          var elements = $('.section6__passport-item');

          elements.each(function(index) {
            $(this).delay(duration * index).queue(function() {
              $(this).addClass('fadeIn').dequeue();
            })
          });
        }

        if(!(page === 'page-6')) {
          $('.section6__passport-item').css('opacity', 0);
          $('.section6__passport-item').removeClass('fadeIn');
        };

        if(page === 'page-7') {
          var duration = 200;
          var elements = $('.funcybox-section7');

          elements.each(function(index) {
            $(this).delay(duration * index).queue(function() {
              $(this).addClass('fadeInUp').dequeue();
            })
          });
        }

        if(!(page === 'page-7')) {
          $('.funcybox-section7').css('opacity', 0);
          $('.funcybox-section7').removeClass('fadeInUp');
        };

        if(page === 'page-8') {
          var duration = 100;
          var elements = $('.section8__ask');

          elements.each(function(index) {
            $(this).delay(duration * index).queue(function() {
              $(this).addClass('fadeInUpAsk').dequeue();
            })
          });
        }

        if(!(page === 'page-8')) {
          $('.section8__ask').css('opacity', 0);
          $('.section8__ask').removeClass('fadeInUpAsk');
        };

        if(page === 'page-10') {
          var duration = 100;
          var elements = $('.section10-item');

          elements.each(function(index) {
            $(this).delay(duration * index).queue(function() {
              $(this).addClass('fadeInUp').dequeue();
            })
          });
        }

        if(!(page === 'page-10')) {
          $('.section10-item').css('opacity', 0);
          $('.section10-item').removeClass('fadeInUp');
        };
      }
    },
    onLeave: function (link, index){
      if(index === 1) {
          $('.arrow-up').css('opacity', 0);
      }

      if(!(index === 1)) {
          $('.arrow-up').css('opacity', 1);
      }

      if ((index === 1) || (index === 3) || (index === 5) || (index === 7) || (index === 9)) {
        $('.page-header').css('color', '#ffffff');
        $('.page-header__mail a').css('color', '#ffffff');
        $('.page-header__tel-btn').css('color', '#ffffff');
        $('.main-nav').css('background', 'rgba(0,0,0,0.8)');
        $('.page-header__logo').css('background-image', 'url("images/logo-white.png")');
        $('.page-header__logo').css('background-size', 'contain');
        $('.page-header__logo').css('background-repeat', 'no-repeat');
        $('.burger').css('background-image', 'url("images/burger-white.png")');
        $('.main-nav li a').css('color', '#ffffff');
        $('.main-nav__btn-close').css('background-image', 'url("./images/main-nav-close-white.png")');
        $('.main-nav__blur').css('background-color', 'rgba(0,0,0,0.8)');

        if ($(document).width() < 961) {
          $('.page-header').css('background-color', 'rgba(0, 0, 0, 0.5)');
        }


        for (var i = 0; mainNavLinks.length > i; i++) {
          mainNavLinks[i].addEventListener('mouseenter', function(evt) {
            evt.target.style.color = '#accc3d';
          })
          mainNavLinks[i].addEventListener('mouseout', function(evt) {
            evt.target.style.color = '#ffffff';
          })
        };
      } else {
        $('.page-header').css('color', '#000000');
        $('.page-header__mail a').css('color', '#000000');
        $('.page-header__tel-btn').css('color', '#000000');
        $('.main-nav').css('background', 'rgba(255,255,255,0.9)');
        $('.page-header__logo').css('background-image', 'url("images/logo-black.png")');
        $('.page-header__logo').css('background-size', 'contain');
        $('.page-header__logo').css('background-repeat', 'no-repeat');
        $('.burger').css('background-image', 'url("images/burger-black.png")');
        $('.main-nav li a').css('color', '#000000');
        $('.main-nav__btn-close').css('background-image', 'url("./images/main-nav-close-black.png")');
        $('.main-nav__blur').css('background-color', 'rgba(255,255,255,0.8)');

        if ($(document).width() < 961) {
          $('.page-header').css('background-color', 'rgba(255, 255, 255, 0.5)');
        }

        for (var i = 0; mainNavLinks.length > i; i++) {
          mainNavLinks[i].addEventListener('mouseenter', function(evt) {
            evt.target.style.color = '#accc3d';
          })
          mainNavLinks[i].addEventListener('mouseout', function(evt) {
            evt.target.style.color = '#000000';
          });
        };
      }
    }
  });
});

$('.main-nav__btn-close').click(function() {
  $('.main-nav').removeClass('menu-left');
  $('.main-nav').addClass('menu-right');
});

$('.burger').click(function(){
  $('.main-nav').addClass('menu-left');
  $('.main-nav').removeClass('hidden');
});

$('.page-header__tel-btn').click(function(){
  $('.popup__phone').removeClass('hidden');
});

$('.section2__form-btn').click(function(){
  $('.popup__phone').removeClass('hidden');
});

$('.section5__btn').click(function(){
  $('.popup__phone').removeClass('hidden');
});

$('.section7__btn').click(function(){
  $('.popup__phone').removeClass('hidden');
});

$('.section8__btn').click(function(){
  $('.popup__ask').removeClass('hidden');
});

$('.section9__btn').click(function(){
  $('.popup__review').removeClass('hidden');
});

$('.section10__btn').click(function(){
  $('.popup__phone').removeClass('hidden');
});

$('.popup__btn-close').click(function(){
  $('.popup__phone').addClass('hidden');
  $('.popup__ask').addClass('hidden');
  $('.popup__review').addClass('hidden');
  $('.popup__success-phone').addClass('hidden');
  $('.popup__success-ask').addClass('hidden');
  $('.popup__success-review').addClass('hidden');
  $('.popup__slider').addClass('hidden');
});

$('.section3__counter-min').text('0' + ($('.section3__big-slider .big-slider__slide').length));

$('.section3__big-slider').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: false,
  asNavFor: '.section3__min-slider',
  focusOnSelect: false,
});

$('.section3__min-slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: false,
  appendArrows: $('.section3-slider__arrows'),
  prevArrow: '<button id="prev" type="button" class="btn section3-btn-prev"><span class = "section3-btn-prev-text">Назад</span><div class="section3-btn-prev-arrow"></div></button>',
  nextArrow: '<button id="next" type="button" class="btn section3-btn-next"><span class = "section3-btn-next-text">Вперед</span><div class="section3-btn-next-arrow"></div></button>',
  asNavFor: '.section3__big-slider'
});


$('.section3__big-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.section3__counter-big').text('0' + (nextSlide + 1));
});

$('.section3__big-slider').on('afterChange', function(event, slick, currentSlide){
  var imgFotos = $('.big-slider__slide-foto');
  $(imgFotos[currentSlide - 1]).removeClass('fadeInRight');
  $(imgFotos[currentSlide + 1]).removeClass('fadeInRight');

});


$('.section9__counter-min').text('0' + ($('.section9__slide').length));

$('.section9__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  appendArrows: $('.section9-slider__arrows'),
  prevArrow: '<button id="prev" type="button" class="btn section3-btn-prev"><span class = "section3-btn-prev-text">Назад</span><div class="section3-btn-prev-arrow"></div></button>',
  nextArrow: '<button id="next" type="button" class="btn section3-btn-next"><span class = "section3-btn-next-text">Вперед</span><div class="section3-btn-next-arrow"></div></button>',
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
});

  $('.popup__slids').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    //fade: true,
    variableWidth: true,
    appendArrows: $('.popup-slider__arrows'),
    prevArrow: '<button id="prev" type="button" class="btn section3-btn-prev popup-slider-prev"><span class = "section3-btn-prev-text popup__slider-prev-text">Назад</span><div class="section3-btn-prev-arrow"></div></button>',
    nextArrow: '<button id="next" type="button" class="btn section3-btn-next popup-slider-next"><span class = "section3-btn-next-text popup__slider-next-text">Вперед</span><div class="section3-btn-next-arrow"></div></button>'
  });


$('.section9__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.section9__counter-big').text('0' + (nextSlide + 1));
});

$('.popup__slider__counter-min').text($('.popup__slid').length);

$('.popup__slids').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  if ((nextSlide + 1) < 10) {
    $('.popup__slider__counter-big').text('0' + (nextSlide + 1));
  } else {
     $('.popup__slider__counter-big').text(nextSlide + 1);
  }
});

var checkBox1 = $('.section1__form-checkbox');
checkBox1.change(function() {
  if(checkBox1.prop('checked')) {
    $('.checkbox__circle').animate({"left": "23px"}, "fast", function() {
      $('.checkbox__yes').css("display", "block");
      $('.checkbox__no').css("display", "none");
      $('.section1__form-btn').prop('disabled', false);
    });
  } else {
    $('.checkbox__circle').animate({"left": "0"}, "fast", function() {
      $('.checkbox__yes').css("display", "none");
      $('.checkbox__no').css("display", "block");
      $('.section1__form-btn').prop('disabled', true);
    });
    };
});

var checkBox2 = $('.popup__phone .section1__form-checkbox');
checkBox2.change(function() {
  if(checkBox2.prop('checked')) {
    $('.popup__phone .checkbox__circle').animate({"left": "23px"}, "fast", function() {
      $('.popup__phone .checkbox__yes').css("display", "block");
      $('.popup__phone .checkbox__no').css("display", "none");
      $('.popup__btn').prop('disabled', false);
    });
  } else {
    $('.popup__phone .checkbox__circle').animate({"left": "0"}, "fast", function() {
      $('.popup__phone .checkbox__yes').css("display", "none");
      $('.popup__phone .checkbox__no').css("display", "block");
      $('.popup__btn').prop('disabled', true);
    });
    }
});

var checkBox3 = $('.popup__ask .section1__form-checkbox');
checkBox3.change(function() {
  if(checkBox3.prop('checked')) {
    $('.popup__ask .checkbox__circle').animate({"left": "23px"}, "fast", function() {
      $('.popup__ask .checkbox__yes').css("display", "block");
      $('.checkbox__no').css("display", "none");
      $('.popup__btn').prop('disabled', false);
    });
  } else {
    $('.popup__ask .checkbox__circle').animate({"left": "0"}, "fast", function() {
      $('.popup__ask .checkbox__yes').css("display", "none");
      $('.checkbox__no').css("display", "block");
      $('.popup__btn').prop('disabled', true);
    });
    }
});

var checkBox4 = $('.popup__review .section1__form-checkbox');
checkBox4.change(function() {
  if(checkBox4.prop('checked')) {
    $('.popup__review .checkbox__circle').animate({"left": "23px"}, "fast", function() {
      $('.popup__review .checkbox__yes').css("display", "block");
      $('.checkbox__no').css("display", "none");
      $('.popup__btn').prop('disabled', false);
    });
  } else {
    $('.popup__review .checkbox__circle').animate({"left": "0"}, "fast", function() {
      $('.popup__review .checkbox__yes').css("display", "none");
      $('.checkbox__no').css("display", "block");
      $('.popup__btn').prop('disabled', true);
    });
    }
});

var askElements = $('.section8__ask');

askElements.each(function(i, element) {
  $(element).click(function(evt) {
    var slideNumber = $(evt.target).attr('data-slide');
    $('.popup__slider').removeClass('hidden');
    $('.popup__slids').slick('slickGoTo', slideNumber);

  });
});


fancybox($);

$(document).ready(function() {
 $("a[rel=lightbox-group]").fancybox({
   helpers:  {
    overlay : {
      css : {
        'background' : 'rgba(255,255,255,0.5)'
      }
    }
  }
  });
});


$("#section1__form").validate({
  rules: {
    your__name: {
    required: true
  },
    your__tel: {
      required: true,
      digits: true
  },
    section1__checkbox: {
      required: true
    }
  },
  messages: {
    your__name: {
      required: 'укажите ваше имя'
    },
    your__tel: {
      required: 'укажите ваш телефон',
      digits: 'только цифры'
    }
  },

  submitHandler: function(form) {

  }
})

$("#popup__phone-form").validate({
  rules: {
    phone__name: {
    required: true
  },
    phone__tel: {
      required: true,
      digits: true
    },
    popup__phone__checkbox: {
      required: true
    }
  },
  messages: {
    phone__name: {
      required: 'укажите ваше имя'
    },
    phone__tel: {
      required: 'укажите ваш телефон',
      digits: 'только цифры'
    }
  }
})

$("#popup__ask-form").validate({
  rules: {
    ask__name: {
    required: true
  },
    ask__email: {
      required: true,
      email: true
    },
    ask__area: {
    required: true,
    },
    popup__ask__checkbox: {
      required: true
    }
  },
  messages: {
    ask__name: {
      required: 'укажите ваше имя'
    },
    ask__email: {
      required: 'укажите ваш email',
      email: 'некорректрый email'
    },
    ask__area: {
    required: 'введите ваш вопрос'
    }
  }
})

$("#popup__review-form").validate({
  rules: {
    review__name: {
    required: true
  },
    review__area: {
      required: true,
    },
   popup__review__checkbox: {
      required: true
    }
  },
  messages: {
    review__name: {
      required: 'укажите ваше имя'
    },
    review__area: {
    required: 'введите ваш отзыв'
    }
  }
})
