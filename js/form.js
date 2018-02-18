'use strict';

(function () {
  var LENGHT_MESSAGE = 2;
  var INPUT_ERRORS = {
    minLength: 'Имя должно состоять минимум из 2-х символов',
    maxLength: 'Имя не должно превышать 25-ти символов',
    requiredField: 'Обязательное поле'
  };

  var nameInputInvalid = function () {
    if (window.userNameInput.validity.tooShort) {
      window.userNameInput.setCustomValidity(INPUT_ERRORS.minLength);
    } else if (window.userNameInput.validity.tooLong) {
      window.userNameInput.setCustomValidity(INPUT_ERRORS.maxLength);
    } else if (window.userNameInput.validity.valueMissing) {
      window.userNameInput.setCustomValidity(INPUT_ERRORS.requiredField);
    } else {
      window.userNameInput.setCustomValidity('');
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

  window.userNameInput.addEventListener('invalid', nameInputInvalid);
  window.userNameInput.addEventListener('input', nameInputClick);
})();
