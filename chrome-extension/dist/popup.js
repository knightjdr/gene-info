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

function goNamespace() {
  console.log('here');
  const type = this.dataset.type;
  console.log(type);
  ['bp', 'cc', 'mf'].forEach((v) => {
    if (v === type) {
      chrome.storage.local.set({ 'goNamespace': v });
    } else {
      document.getElementById('goNamespace_' + v).checked = false;
    }
  });
  tabsFunction({ action: 'toggleGoNamespace', type: type });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.activate-click').forEach((element) => { element.addEventListener('click', activateType); });
  document.querySelectorAll('.display-click').forEach((element) => { element.addEventListener('click', reportType); });
  document.querySelectorAll('.namespace-click').forEach((element) => { element.addEventListener('click', goNamespace); });
  document.querySelectorAll('.toggle').forEach((element) => { element.addEventListener('click', toggle); });
});

function reportType() {
  const type = this.dataset.type;
  ['detailed', 'tooltip'].forEach((v) => {
    if (v === type) {
      chrome.storage.local.set({ 'report': v });
    } else {
      document.getElementById('report_' + v).checked = false;
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
  // update storage settings
  chrome.storage.local.set(toggleObj);
  // update content options
  tabsFunction({ action: 'toggleDisplayElement', type: type, checked: checked });
  // hide toggle options if exist
  const optionsID = `toggle-container-options-${type}`;
  document.getElementById(optionsID).style.display = checked ? 'block' : 'none';
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

// get user preferences on load
// activation method
chrome.storage.local.get('activate', function(storage) {
  if (storage.activate) {
    ['click', 'drag', 'disable'].forEach((v) => {
      if (v === storage.activate) {
        document.getElementById(`report_${v}`).checked = true;
      } else {
        document.getElementById(`report_${v}`).checked = false;
      }
    });
  }
});
// report type
chrome.storage.local.get('report', function(storage) {
  if (storage.report) {
    ['detailed', 'tooltip'].forEach((v) => {
      if (v === storage.report) {
        document.getElementById(`report_${v}`).checked = true;
      } else {
        document.getElementById(`report_${v}`).checked = false;
      }
    });
  }
});
// options
const details = ['basic', 'description', 'domain', 'go', 'interactors', 'links'];
details.forEach(function(detail) {
  const currDetail = 'detail-' + detail;
  chrome.storage.local.get(currDetail, function(storage) {
    if (storage[currDetail] === 'off') {
      document.getElementById(`detail_${detail}`).checked = false;
      document.getElementById(`toggle-container-options-${detail}`).style.display = 'none';
    }
  });
});
chrome.storage.local.get('goNamespace', function(storage) {
  if (storage.goNamespace) {
    ['bp', 'cc', 'mf'].forEach((v) => {
      if (v === storage.goNamespace) {
        document.getElementById(`goNamespace_${v}`).checked = true;
      } else {
        document.getElementById(`goNamespace_${v}`).checked = false;
      }
    });
  }
});
