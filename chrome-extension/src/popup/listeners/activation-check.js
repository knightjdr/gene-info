import { updateTab } from '../helpers/message';

const activatationCheck = function activate() {
  const options = ['click', 'drag', 'disable'];
  const { type } = this.dataset;
  options.forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ activate: option });
      document.getElementById(`activate_${option}`).checked = true;
    } else {
      document.getElementById(`activate_${option}`).checked = false;
    }
  });
  updateTab('updateSetting', 'activate', type);
};

export default activatationCheck;
