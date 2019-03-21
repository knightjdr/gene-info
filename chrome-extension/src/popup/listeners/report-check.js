import { updateTab } from '../helpers/message';

const reportCheck = function report() {
  const options = ['detailed', 'tooltip'];
  const { type } = this.dataset;
  options.forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ report: option });
      document.getElementById(option).checked = true;
    } else {
      document.getElementById(option).checked = false;
    }
  });
  updateTab('updateSetting', 'report', type);
};

export default reportCheck;
