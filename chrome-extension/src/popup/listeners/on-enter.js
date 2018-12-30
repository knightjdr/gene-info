import updateTab from './update-tab';

const onEnter = function enter(e) {
  if (e.keyCode === 13) {
    const { value } = this;
    chrome.storage.local.set({ input_search: value });
    if (value) {
      updateTab({ action: 'searchTerm', value });
    }
  }
};

export default onEnter;
