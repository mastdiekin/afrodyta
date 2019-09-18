import ToggleEmelents from '../lib/toggle-elements';

module.exports = function cart() {
  const toggleCartBtn = $('.js__header__cart');
  const toggleCartWindow = $('.js__cart');
  const toggleCart = new ToggleEmelents(toggleCartBtn, toggleCartWindow, null, 'rl');
  
  toggleCartBtn.on('click', function(e) {
    e.preventDefault();
    toggleCart.toggle();
  });
  $('.js__cart__close').on('click', function(e) {
    e.preventDefault();
    toggleCart.toggle();
  }); 
};
