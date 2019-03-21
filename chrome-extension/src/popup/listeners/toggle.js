import { updateTab } from '../helpers/message';

const toggle = function tog() {
  const { checked } = this;
  const { type } = this.dataset;
  chrome.storage.local.set({ [type]: checked });
  updateTab('updateSetting', type, checked);
};

export default toggle;
