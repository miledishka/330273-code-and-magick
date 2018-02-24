'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var HIDDEN = 'hidden';

  window.getRandomElement = function (arrayOfData) {
    var elementIndex = window.getRandomIndexInArray(arrayOfData);

    return arrayOfData[elementIndex];
  };

  window.getRandomIndexInArray = function (items) {
    return Math.floor(Math.random() * items.length);
  };

  var documentKeydownHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && window.userNameInput !== document.activeElement) {
      window.setup.classList.add(HIDDEN);
    }
  };

  var setupOpenClickHandler = function () {
    window.setup.classList.remove(HIDDEN);
  };

  var setupOpenKeydownHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      window.setup.classList.remove(HIDDEN);
    }
  };

  var setupCloseClickHandler = function () {
    window.setup.classList.add(HIDDEN);
  };

  var setupCloseHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      window.setup.classList.add(HIDDEN);
    }
  };

  window.setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.querySelector('.setup-close');
  window.userNameInput = window.setup.querySelector('.setup-user-name');

  window.setup.classList.remove(HIDDEN);
  window.setup.querySelector('.setup-similar').classList.remove(HIDDEN);

  document.addEventListener('keydown', documentKeydownHandler);
  setupOpen.addEventListener('click', setupOpenClickHandler);
  setupOpen.addEventListener('keydown', setupOpenKeydownHandler);
  setupClose.addEventListener('click', setupCloseClickHandler);
  setupClose.addEventListener('keydown', setupCloseHandler);
})();
