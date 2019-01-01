import config from '../../config';

const namespaceCheckbox = () => {
  chrome.storage.local.get('go_namespace', (storage) => {
    const namespace = storage.go_namespace || config.defaultGoNamespace;
    config.goNamespaces.forEach((option) => {
      const checked = option === namespace;
      document.getElementById(`go_namespace_${option}`).checked = checked;
    });
  });
};

export default namespaceCheckbox;
