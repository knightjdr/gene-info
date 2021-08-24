const reportCheckbox = () => {
  const options = ['detailed', 'tooltip'];
  chrome.storage.local.get('report', (storage) => {
    const report = storage.report || 'detailed';
    options.forEach((option) => {
      const checked = option === report;
      document.getElementById(option).checked = checked;
    });
  });
};

export default reportCheckbox;
