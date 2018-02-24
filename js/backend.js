'use strict';

(function () {
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';
  var STATUS_SUCCESS = 200;
  var REQUEST_TIMEOUT = 10000; // 10s

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = REQUEST_TIMEOUT;

    var onLoadHandler = function () {
      if (xhr.status === STATUS_SUCCESS) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    };

    var onErrorHandler = function () {
      onError('Произошла ошибка соединения');
    };

    var onTimeoutHandler = function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    };

    xhr.addEventListener('load', onLoadHandler);
    xhr.addEventListener('error', onErrorHandler);
    xhr.addEventListener('timeout', onTimeoutHandler);

    xhr.open('GET', LOAD_URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    var onLoadHandler = function () {
      onLoad(xhr.response);
    };

    var onErrorHandler = function () {
      onError('Произошла ошибка соединения');
    };

    var onTimeoutHandler = function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    };

    xhr.addEventListener('error', onErrorHandler);
    xhr.addEventListener('load', onLoadHandler);
    xhr.addEventListener('timeout', onTimeoutHandler);

    xhr.open('POST', SAVE_URL);
    xhr.send(data);
  };

  window.errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.classList.add('errors');
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
