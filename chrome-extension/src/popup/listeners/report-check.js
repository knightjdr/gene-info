import updateTab from './update-tab';

const reportCheck = function report() {
  const options = ['detailed', 'tooltip'];
  const { type } = this.dataset;
  options.forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ check_report: option });
    } else {
      document.getElementById(`check_${option}`).checked = false;
    }
  });
  updateTab({ action: 'updateReportType', type });
};

export default reportCheck;
