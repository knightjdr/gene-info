import updateTab from './update-tab';

const toggle = function tog() {
  const { checked } = this;
  const { type } = this.dataset;
  const toggleObj = {};
  toggleObj[`detail-${type}`] = checked;
  chrome.storage.local.set(toggleObj);
  updateTab({ action: 'toggleDisplayElement', type, checked });
  const optionsID = `toggle-container-options-${type}`;
  const el = document.getElementById(optionsID);
  if (el) {
    el.style.display = checked ? 'block' : 'none';
  }
};

export default toggle;
