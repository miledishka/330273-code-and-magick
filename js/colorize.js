'use strict';

(function () {
  var CLOTHES_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var onWizardCoatClickHandler = function () {
    wizardCoat.style.fill = window.getRandomElement(CLOTHES_COLORS);
  };

  var onWizardEyesClickHandler = function () {
    wizardEyes.style.fill = window.getRandomElement(EYES_COLORS);
  };

  var onFireballWrapClickHandler = function () {
    fireballWrap.style.background = window.getRandomElement(FIREBALL_COLORS);
  };

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

  wizardCoat.addEventListener('click', onWizardCoatClickHandler);
  wizardEyes.addEventListener('click', onWizardEyesClickHandler);
  fireballWrap.addEventListener('click', onFireballWrapClickHandler);
})();
