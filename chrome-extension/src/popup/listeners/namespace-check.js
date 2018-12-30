import updateTab from './update-tab';

const namespaceCheck = function namespage() {
  const { type } = this.dataset;
  ['bp', 'cc', 'mf'].forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ check_namespace: option });
    } else {
      document.getElementById(`check_namespace_${option}`).checked = false;
    }
  });
  updateTab({ action: 'updateNamespace', type });
};

export default namespaceCheck;
