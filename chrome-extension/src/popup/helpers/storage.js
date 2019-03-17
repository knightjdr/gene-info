const get = (field, callback, ...args) => {
  chrome.storage.local.get(field, (storage) => {
    callback(field, storage[field], ...args);
  });
};

export default get;
