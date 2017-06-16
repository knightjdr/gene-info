//check if content is listening and send message, if not, execute, then send message
function ensureSendMessage(tabId, message, callback) {
  chrome.tabs.sendMessage(tabId, {action: 'ping'}, function(response) {
    if (response.ready) {
      chrome.tabs.sendMessage(tabId, message, callback);
    } else {
      chrome.tabs.executeScript(tabId, {file: "content.js"}, function() {
        if(chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          throw Error("Unable to inject script into tab " + tabId);
        }
        chrome.tabs.sendMessage(tabId, message, callback);
      });
    }
  });
}
