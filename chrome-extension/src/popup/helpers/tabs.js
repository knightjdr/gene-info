const query = (queryObj, callback, ...args) => {
  chrome.tabs.query(queryObj, (tabs) => {
    callback(tabs, ...args);
  });
};

export default query;
