const options = ['click', 'drag', 'disable'];

const activationCheckbox = () => {
  chrome.storage.local.get('check_activate', (storage) => {
    const activate = storage.check_activate || 'click';
    options.forEach((option) => {
      const checked = option === activate;
      document.getElementById(`check_activate_${option}`).checked = checked;
    });
  });
};

export default activationCheckbox;
