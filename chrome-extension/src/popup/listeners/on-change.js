import updateTab from './update-tab';

const onChange = function change() {
  const { value } = this;
  const { type } = this.dataset;
  chrome.storage.local.set({ [`select_${type}`]: value });
  updateTab({ action: 'updateSelect', type, value });
};

export default onChange;
