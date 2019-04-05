import { updateTab } from '../helpers/message';

const namespaceCheck = function namespage() {
  const { type } = this.dataset;
  ['bp', 'cc', 'mf'].forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ go_namespace: option });
      document.getElementById(`go_namespace_${option}`).checked = true;
    } else {
      document.getElementById(`go_namespace_${option}`).checked = false;
    }
  });
  updateTab('updateSetting', 'go_namespace', type);
};

export default namespaceCheck;
