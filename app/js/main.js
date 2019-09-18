/**
 * Libs
 */
import $ from 'jquery';
import hello from './lib/hello';
import './lib/pollyfills';
import preloader from './lib/preloader';
import svg4everybody from '../libs/svg4everybody/dist/svg4everybody.legacy';
import Waypoint from '../libs/waypoints/lib/jquery.waypoints';

/**
 * Modules
 */
import search from './src/search';
import cart from './src/cart';

$('.js__up').click(function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});

$('.js__header__bottom-content').css({
  paddingTop: $('.js__header__top-content').outerHeight(true)
});

// Scroll Events
$(window).scroll(function() {

  const wScroll = $(this).scrollTop();

  if (wScroll > 0) {
    $('.js__header__top-content').addClass('is--slided');
  }
  else {
    $('.js__header__top-content').removeClass('is--slided');
  };

  if (wScroll > $('.js__header__top-content').outerHeight(true)) {
    $('.js__header__top-content').addClass('is--shadowed');
  }
  else {
    $('.js__header__top-content').removeClass('is--shadowed');
  };

  if (wScroll > $(document).outerHeight(true)/4) {
    $('.js__up').addClass('is--active');
  }
  else {
    $('.js__up').removeClass('is--active');
  };

});

hello();
preloader();
search();
cart();
svg4everybody({
  polyfill: true 
});
