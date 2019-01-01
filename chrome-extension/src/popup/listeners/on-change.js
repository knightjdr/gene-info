import updateTab from './update-tab';

const onChange = function change() {
  const { value } = this;
  const { type } = this.dataset;
  chrome.storage.local.set({ [type]: value });
  updateTab('updateSetting', type, value);
};

export default onChange;
