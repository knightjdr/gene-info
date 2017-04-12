//get active tab and send current object to content script
function tabsFunction(sendObject) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    ensureSendMessage(tabs[0].id, sendObject);
  });
}
//check if content is listening and send message, if not, execute, then send message
function ensureSendMessage(tabId, message, callback) {
  chrome.tabs.sendMessage(tabId, {action: 'ping'}, function(response) {
    if(response.ready) {
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

//set params on page load
chrome.storage.local.get('click', function(storage) {
  if(storage.click) {
    document.querySelector('#click').checked = true;
  }
});
chrome.storage.local.get('report', function(storage) {
  if(storage.report) {
    document.querySelector('#report_' + storage.report).checked = true;
    const typeOff = storage.report === 'detailed' ? 'tooltip' : 'detailed';
    document.querySelector('#report_' + typeOff).checked = false;
  }
});
const details = ['basic', 'description', 'go', 'interactors', 'links'];
details.forEach(function(detail) {
  const currDetail = 'detail-' + detail;
  chrome.storage.local.get(currDetail, function(storage) {
    if(storage[currDetail] === 'off') {
      document.querySelector('#detail_' + detail).checked = false;
    }
  });
});

//listeners
function clickSet() {
  const checked = this.checked;
  chrome.storage.local.set({'click': checked});
  tabsFunction({action: 'toggleDoubleClick', click: checked});
}
function reportType() {
  const type = this.dataset.type;
  chrome.storage.local.set({'report': type});
  const typeOff = this.dataset.type === 'detailed' ? 'tooltip' : 'detailed';
  document.querySelector('#report_' + typeOff).checked = false;
  tabsFunction({action: 'toggleReportType', type: type});
}
function toggle() {
  const checked = this.checked;
  const toggleValue = checked ? 'on' : 'off';
  const type = this.dataset.type;
  const toggleObj = {};
  toggleObj['detail-' + type] = toggleValue;
  chrome.storage.local.set(toggleObj);
  tabsFunction({action: 'toggleDisplayElement', type: type, checked: checked});
}

//inject listeners
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#click').addEventListener('click', clickSet);
  document.querySelectorAll('.display-click').forEach(function(element) { element.addEventListener('click', reportType); });
  document.querySelectorAll('.toggle').forEach(function(element) { element.addEventListener('click', toggle); });
});
