'use strict';

(function () {
  var shopElementDragStartHandler = function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  };

  var artifactsDragOverHandler = function (evt) {
    evt.preventDefault();
    return false;
  };

  var artifactsDragEnterHandler = function (evt) {
    evt.target.style.outline = '2px dashed red';
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  };

  var artifactsDragLeaveHandler = function (evt) {
    evt.target.style.outline = '';
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  };

  var artifactsDropHandler = function (evt) {
    evt.target.style.outline = '';
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
    evt.preventDefault();
  };

  var artifactsElement = document.querySelector('.setup-artifacts');
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  artifactsElement.addEventListener('dragover', artifactsDragOverHandler);
  artifactsElement.addEventListener('dragenter', artifactsDragEnterHandler);
  artifactsElement.addEventListener('dragleave', artifactsDragLeaveHandler);
  artifactsElement.addEventListener('drop', artifactsDropHandler);
  shopElement.addEventListener('dragstart', shopElementDragStartHandler);
})();
