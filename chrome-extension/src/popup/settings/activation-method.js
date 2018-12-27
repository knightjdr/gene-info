const activationMethod = () => {
  chrome.storage.local.get('activate', (storage) => {
    const activate = storage.activate || 'click';
    ['click', 'drag', 'disable'].forEach((option) => {
      if (option === activate) {
        document.getElementById(`report_${option}`).checked = true;
      } else {
        document.getElementById(`report_${option}`).checked = false;
      }
    });
  });
};

export default activationMethod;
