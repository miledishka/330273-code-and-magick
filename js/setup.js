// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'green', 'yellow'];
var WIZARDS_COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var LENGHT_MESSAGE = 2;
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

var INPUT_ERRORS = {
  minLength: 'Имя должно состоять минимум из 2-х символов',
  maxLength: 'Имя не должно превышать 25-ти символов',
  requiredField: 'Обязательное поле'
};

var HIDDEN = 'hidden';

var getRandomElement = function (arrayOfData) {
  var elementIndex = getRandomIndexInArray(arrayOfData);

  return arrayOfData[elementIndex];
};

var getRandomIndexInArray = function (items) {
  return Math.floor(Math.random() * items.length);
};

var wizardName = function () {
  return getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES);
};

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').textContent = wizard.Eyescolor;

  return wizardElement;
};

var documentKeydownHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && userNameInput !== document.activeElement) {
    setup.classList.add(HIDDEN);
  }
};

var setupOpenClickHandler = function () {
  setup.classList.remove(HIDDEN);
};

var setupOpenKeydownHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setup.classList.remove(HIDDEN);
  }
};

var setupCloseClickHandler = function () {
  setup.classList.add(HIDDEN);
};

var setupCloseHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setup.classList.add(HIDDEN);
  }
};

var nameInputInvalid = function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity(INPUT_ERRORS.minLength);
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity(INPUT_ERRORS.maxLength);
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity(INPUT_ERRORS.requiredField);
  } else {
    userNameInput.setCustomValidity('');
  }
};

var nameInputClick = function (evt) {
  var target = evt.target;
  if (target.value.length < LENGHT_MESSAGE) {
    target.setCustomValidity(INPUT_ERRORS.minLength);
  } else {
    target.setCustomValidity('');
  }
};

var onWizardCoatClickHandler = function () {
  wizardCoat.style.fill = getRandomElement(CLOTHES_COLORS);
};

var onWizardEyesClickHandler = function () {
  wizardEyes.style.fill = getRandomElement(EYES_COLORS);
};

var onFireballWrapClickHandler = function () {
  fireballWrap.style.background = getRandomElement(FIREBALL_COLORS);
};

var wizards = [];
for (i = 0; i < WIZARDS_COUNT; i++) {
  wizards.push({
    name: wizardName(),
    coatColor: getRandomElement(WIZARD_COATCOLOR),
    eyesColor: getRandomElement(WIZARD_EYESCOLOR)
  });
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var fireballWrap = document.querySelector('.setup-fireball-wrap');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

setup.classList.remove(HIDDEN);
setup.querySelector('.setup-similar-list').appendChild(fragment);
setup.querySelector('.setup-similar').classList.remove(HIDDEN);

document.addEventListener('keydown', documentKeydownHandler);
setupOpen.addEventListener('click', setupOpenClickHandler);
setupOpen.addEventListener('keydown', setupOpenKeydownHandler);
setupClose.addEventListener('click', setupCloseClickHandler);
setupClose.addEventListener('keydown', setupCloseHandler);
userNameInput.addEventListener('invalid', nameInputInvalid);
userNameInput.addEventListener('input', nameInputClick);
wizardCoat.addEventListener('click', onWizardCoatClickHandler);
wizardEyes.addEventListener('click', onWizardEyesClickHandler);
fireballWrap.addEventListener('click', onFireballWrapClickHandler);
