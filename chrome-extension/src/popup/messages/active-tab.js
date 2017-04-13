//get active tab and send current object to content script
function tabsFunction(sendObject) {
  /*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    ensureSendMessage(tabs[0].id, sendObject);
  });*/
  chrome.tabs.query({}, function(tabs) {
    for(let i = 0, iLen = tabs.length; i < iLen; i++) {
      chrome.tabs.sendMessage(tabs[i].id, sendObject);
    }
  });
}
