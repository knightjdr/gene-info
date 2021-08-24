export const activeTab = (action, setting, value) => (
  new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action, setting, value }, (response) => {
        resolve(response);
      });
    });
  })
);

// Send object to content script. Do this for all tabs as they should all update
// When a setting changes.
export const updateTab = (action, setting, value) => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, { action, setting, value });
    });
  });
};
