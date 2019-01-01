// Send object to content script. Do this for all tabs as they should all update
// When a setting changes.
const updateTab = (action, setting, value) => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, { action, setting, value });
    });
  });
};

export default updateTab;
