/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/background/events.js ***!
  \**********************************/
const url =  false
  ? 0
  : 'http://localhost:8002';

chrome.runtime.onMessage.addListener((request, sender, callback) => {
  if (request.action === 'xhttp') {
    const xhr = new XMLHttpRequest();
    const method = request.method ? request.method.toUpperCase() : 'GET';
    xhr.onload = () => {
      callback({
        result: xhr.response,
        status: xhr.status,
      });
    };
    xhr.onerror = () => {
      callback({
        result: null,
        status: xhr.status,
      });
    };
    xhr.open(method, `${url}/extension${request.route}`, true);
    xhr.responseType = 'json';
    xhr.send();
    return true;
  }
  return false;
});

/******/ })()
;
//# sourceMappingURL=background.js.map