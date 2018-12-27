import updateTab from './update-tab';

const goNamespace = function namespage() {
  const { type } = this.dataset;
  ['bp', 'cc', 'mf'].forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ goNamespace: option });
    } else {
      document.getElementById(`goNamespace_${option}`).checked = false;
    }
  });
  updateTab({ action: 'toggleGoNamespace', type });
};

export default goNamespace;
