const options = ['click', 'drag', 'disable'];

const activationCheckbox = () => {
  chrome.storage.local.get('activate', (storage) => {
    const activate = storage.activate || 'click';
    options.forEach((option) => {
      const checked = option === activate;
      document.getElementById(`activate_${option}`).checked = checked;
    });
  });
};

export default activationCheckbox;
