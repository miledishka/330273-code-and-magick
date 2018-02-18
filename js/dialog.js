'use strict';

(function () {
  var onMouseDownUserPicHandler = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      window.dialogDraggable = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.style.top = (window.setup.offsetTop - shift.y) + 'px';
      window.setup.style.left = (window.setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      window.dialogDraggable = false;

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  var onClickUserPicHandler = function (evt) {
    if (window.dialogDraggable) {
      evt.preventDefault();
    }
  };

  window.dialogDraggable = false;
  var userPic = document.querySelector('.setup-user-pic').parentElement;
  var userPicInput = document.querySelector('input[name=avatar]');

  userPic.addEventListener('mousedown', onMouseDownUserPicHandler);
  userPicInput.addEventListener('onClick', onClickUserPicHandler);
})();
