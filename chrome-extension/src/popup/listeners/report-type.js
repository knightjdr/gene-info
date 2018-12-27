import updateTab from './update-tab';

const reportType = function report() {
  const { type } = this.dataset;
  ['detailed', 'tooltip'].forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ report: option });
    } else {
      document.getElementById(`report_${option}`).checked = false;
    }
  });
  updateTab({ action: 'toggleReportType', type });
};

export default reportType;
