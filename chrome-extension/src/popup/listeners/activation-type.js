import updateTab from './update-tab';

const activatationType = function activate() {
  const options = ['click', 'drag', 'disable'];
  const { type } = this.dataset;
  options.forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ activate: option });
    } else {
      document.querySelector(`#report_${option}`).checked = false;
    }
  });
  updateTab({ action: 'toggleActivationMethod', type });
};

export default activatationType;
