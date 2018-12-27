const reportType = () => {
  chrome.storage.local.get('report', (storage) => {
    const report = storage.report || 'detailed';
    ['detailed', 'tooltip'].forEach((option) => {
      if (option === report) {
        document.getElementById(`report_${option}`).checked = true;
      } else {
        document.getElementById(`report_${option}`).checked = false;
      }
    });
  });
};

export default reportType;
