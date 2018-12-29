import updateTab from './update-tab';

const toggle = function tog() {
  const { checked } = this;
  const { type } = this.dataset;
  chrome.storage.local.set({ [`toggle_${type}`]: checked });
  updateTab({ action: 'toggleDisplayElement', type, checked });
  const optionsID = `toggle_options_${type}`;
  const el = document.getElementById(optionsID);
  if (el) {
    el.style.display = checked ? 'block' : 'none';
  }
};

export default toggle;
