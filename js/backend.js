'use strict';

(function () {
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    var onLoadHandler = function () {
      if (xhr.status === 200) {
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

    xhr.timeout = 10000; // 10s

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
    xhr.addEventListener('error', onErrorHandler);
    xhr.addEventListener('load', onLoadHandler);
    xhr.open('POST', SAVE_URL);
    xhr.send(data);
  };

  window.errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
