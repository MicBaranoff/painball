(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){
    $('.mainbannerslider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        prevArrow: 'section.mainbanner .holder .prev',
        nextArrow: 'section.mainbanner .holder .next',
        appendDots: '.mainbannerslider-dots'
      });

      $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: '.reviews-slider-dots',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,

            }
          }
        ]
      });

      $('.burger').on('click', function(){
        $('header .header-nav').toggleClass('active');
      });

      $('.countdown').countdownTimer('2020/04/25 12:00');

});
},{}]},{},[1]);
