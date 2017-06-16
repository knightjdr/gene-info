chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  if (request.action == "xhttp") {
    var xhttp = new XMLHttpRequest();
    var method = request.method ? request.method.toUpperCase() : 'GET';
    xhttp.onload = function() {
      callback(xhttp.responseText);
    };
    xhttp.onerror = function() {
      callback();
    };
    xhttp.open(method, request.url, true);
    xhttp.send(request.data);
    return true;
  }
});
