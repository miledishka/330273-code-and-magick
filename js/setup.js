// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'green', 'yellow'];
var WIZARDS_COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var FILLCOLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var FILLEYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FILLFIREBALL = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

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

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar-list').appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE && userNameInput !== document.activeElement) {
    setup.classList.add('hidden');
  }
});

var setupOpen = document.querySelector('.setup-open');
setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setup.classList.remove('hidden');
  }
});

var setupClose = setup.querySelector('.setup-close');
setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setup.classList.add('hidden');
  }
});

var userNameInput = setup.querySelector('.setup-user-name');
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomElement(FILLCOLOR);
});

var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElement(FILLEYES);
});

var fireballWrap = document.querySelector('.setup-fireball-wrap');
fireballWrap.addEventListener('click', function () {
  fireballWrap.style.background = getRandomElement(FILLFIREBALL);
});
