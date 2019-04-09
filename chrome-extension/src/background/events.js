const url = process.env.NODE_ENV === 'production'
  ? 'https://gene-info.org/api'
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
