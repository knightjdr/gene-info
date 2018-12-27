const options = [
  'auto',
  'basic',
  'description',
  'domain',
  'go',
  'interactors',
  'links',
];

const details = () => {
  options.forEach((option) => {
    const currDetail = `detail-${option}`;
    chrome.storage.local.get(currDetail, (storage) => {
      if (!storage[currDetail]) {
        document.getElementById(`detail_${option}`).checked = false;
        const el = document.getElementById(`toggle-container-options-${option}`);
        if (el) {
          el.style.display = 'none';
        }
      }
    });
  });

  chrome.storage.local.get('goNamespace', (storage) => {
    if (storage.goNamespace) {
      ['bp', 'cc', 'mf'].forEach((v) => {
        if (v === storage.goNamespace) {
          document.getElementById(`goNamespace_${v}`).checked = true;
        } else {
          document.getElementById(`goNamespace_${v}`).checked = false;
        }
      });
    }
  });
};

export default details;
