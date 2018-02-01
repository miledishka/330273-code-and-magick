// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'green', 'yellow'];
var WIZARDS_COUNT = 4;

var getRandomIndexInArray = function (items) {
  return Math.floor(Math.random() * items.length);
};

var wizardName = function () {
  var wizardNameIndex = getRandomIndexInArray(WIZARD_NAMES);
  var wizardSurnameIndex = getRandomIndexInArray(WIZARD_SURNAMES);

  return WIZARD_NAMES[wizardNameIndex] + ' ' + WIZARD_SURNAMES[wizardSurnameIndex];
};

var wizardCoatColor = function () {
  var wizardCoatcolorIndex = getRandomIndexInArray(WIZARD_COATCOLOR);

  return WIZARD_COATCOLOR[wizardCoatcolorIndex];
};

var wizardEyesColor = function () {
  var wizardEyescolorIndex = getRandomIndexInArray(WIZARD_EYESCOLOR);

  return WIZARD_EYESCOLOR[wizardEyescolorIndex];
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
    coatColor: wizardCoatColor(),
    eyesColor: wizardEyesColor()
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
