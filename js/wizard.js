'use strict';

(function () {
  var WIZARDS_COUNT = 4;

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').textContent = wizard.colorEyes;

    return wizardElement;
  };

  var onLoadHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      var wizardIndex = window.getRandomIndexInArray(wizards);
      fragment.appendChild(renderWizard(wizards.slice().splice(wizardIndex, 1)[0]));
    }

    window.setup.querySelector('.setup-similar-list').appendChild(fragment);
    window.setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(onLoadHandler, window.errorHandler);
})();
