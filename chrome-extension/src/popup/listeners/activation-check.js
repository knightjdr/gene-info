import updateTab from './update-tab';

const activatationCheck = function activate() {
  const options = ['click', 'drag', 'disable'];
  const { type } = this.dataset;
  options.forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ check_activate: option });
    } else {
      document.getElementById(`check_activate_${option}`).checked = false;
    }
  });
  updateTab({ action: 'updateActivationMethod', type });
};

export default activatationCheck;
