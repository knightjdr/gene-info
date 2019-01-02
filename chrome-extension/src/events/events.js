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
    xhr.open(method, request.url, true);
    xhr.responseType = 'json';
    xhr.send(request.data);
    return true;
  }
  return false;
});
