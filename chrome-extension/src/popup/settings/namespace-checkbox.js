const options = ['bp', 'cc', 'mf'];

const namespaceCheckbox = () => {
  chrome.storage.local.get('check_namespace', (storage) => {
    const namespace = storage.check_namespace || 'bp';
    options.forEach((option) => {
      const checked = option === namespace;
      document.getElementById(`check_namespace_${option}`).checked = checked;
    });
  });
};

export default namespaceCheckbox;
