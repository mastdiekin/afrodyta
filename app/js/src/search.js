import ToggleEmelents from '../lib/toggle-elements';

module.exports = function search() {
  const toggleSearchBtn = $('.js__header__search');
  const toggleSearchWindow = $('.js__header__search-form');
  const toggleSearchInput = $('.js__header__search-input');
  const toggleSearch = new ToggleEmelents(toggleSearchBtn, toggleSearchWindow, toggleSearchInput);

  toggleSearchBtn.on('click', function(e) {
    e.preventDefault();
    toggleSearch.toggle();
  });
  $('.js__header__search-close').on('click', function(e) {
    e.preventDefault();
    toggleSearch.toggle();
  });
};
