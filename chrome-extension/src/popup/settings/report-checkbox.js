const reportCheckbox = () => {
  const options = ['detailed', 'tooltip'];
  chrome.storage.local.get('check_report', (storage) => {
    const report = storage.check_report || 'detailed';
    options.forEach((option) => {
      const checked = option === report;
      document.getElementById(`check_${option}`).checked = checked;
    });
  });
};

export default reportCheckbox;
