// Send object to content script. Do this for all tabs as they should all update
// When a setting changes.
const updateTab = (setting) => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, setting);
    });
  });
};

export default updateTab;
