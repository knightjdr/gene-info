chrome.runtime.onMessage.addListener((request, sender, callback) => {
  if (request.action === 'xhttp') {
    const xhttp = new XMLHttpRequest();
    const method = request.method ? request.method.toUpperCase() : 'GET';
    xhttp.onload = () => {
      callback(xhttp.responseText);
    };
    xhttp.onerror = () => {
      callback();
    };
    xhttp.open(method, request.url, true);
    xhttp.send(request.data);
    return true;
  }
  return false;
});
