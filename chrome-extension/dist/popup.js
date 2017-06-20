function activateType() {
  const options = ['click', 'drag', 'disable'];
  const type = this.dataset.type;
  options.forEach((v) => {
    if (v === type) {
      chrome.storage.local.set({ 'activate': v });
    } else {
      document.querySelector('#report_' + v).checked = false;
    }
  });
  tabsFunction({ action: 'toggleActivationMethod', type: type });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.activate-click').forEach((element) => { element.addEventListener('click', activateType); });
  document.querySelectorAll('.display-click').forEach((element) => { element.addEventListener('click', reportType); });
  document.querySelectorAll('.toggle').forEach((element) => { element.addEventListener('click', toggle); });
});

function reportType() {
  const options = ['detailed', 'tooltip'];
  const type = this.dataset.type;
  options.forEach((v) => {
    if (v === type) {
      chrome.storage.local.set({ 'report': v });
    } else {
      document.querySelector('#report_' + v).checked = false;
    }
  });
  tabsFunction({ action: 'toggleReportType', type: type });
}

function toggle() {
  const checked = this.checked;
  const toggleValue = checked ? 'on' : 'off';
  const type = this.dataset.type;
  const toggleObj = {};
  toggleObj['detail-' + type] = toggleValue;
  chrome.storage.local.set(toggleObj);
  tabsFunction({ action: 'toggleDisplayElement', type: type, checked: checked });
}

// get active tab and send current object to content script
const tabsFunction = (sendObject) => {
  /*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    ensureSendMessage(tabs[0].id, sendObject);
  });*/
  chrome.tabs.query({}, function(tabs) {
    for(let i = 0, iLen = tabs.length; i < iLen; i++) {
      chrome.tabs.sendMessage(tabs[i].id, sendObject);
    }
  });
};

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

//set params on page load
chrome.storage.local.get('activate', function(storage) {
  if (storage.activate) {
    const options = ['click', 'drag', 'disable'];
    options.forEach((v) => {
      if (v === storage.activate) {
        document.querySelector('#report_' + v).checked = true;
      } else {
        document.querySelector('#report_' + v).checked = false;
      }
    });
  }
});
chrome.storage.local.get('report', function(storage) {
  if (storage.report) {
    const options = ['detailed', 'tooltip'];
    options.forEach((v) => {
      if (v === storage.report) {
        document.querySelector('#report_' + v).checked = true;
      } else {
        document.querySelector('#report_' + v).checked = false;
      }
    });
  }
});
const details = ['basic', 'description', 'domain', 'go', 'interactors', 'links'];
details.forEach(function(detail) {
  const currDetail = 'detail-' + detail;
  chrome.storage.local.get(currDetail, function(storage) {
    if (storage[currDetail] === 'off') {
      document.querySelector('#detail_' + detail).checked = false;
    }
  });
});
