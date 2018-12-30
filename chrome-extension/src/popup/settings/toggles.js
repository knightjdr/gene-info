const options = [
  'auto',
  'basic',
  'description',
  'domain',
  'go',
  'interactors',
  'links',
  'localization',
  'localization_compartments',
  'localization_hpa',
  'localization_uniprot',
];

const toggles = () => {
  options.forEach((option) => {
    const currToggle = `toggle_${option}`;
    chrome.storage.local.get(currToggle, (storage) => {
      const checked = Boolean(storage[currToggle] || storage[currToggle] === undefined);
      document.getElementById(`toggle_${option}`).checked = checked;
      const el = document.getElementById(`toggle_options_${option}`);
      if (el) {
        el.style.display = checked ? 'block' : 'none';
      }
    });
  });
};

export default toggles;
