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
  'rna_expression',
  'region',
];

const toggles = () => {
  options.forEach((option) => {
    const currToggle = option;
    chrome.storage.local.get(currToggle, (storage) => {
      const checked = Boolean(storage[currToggle] || storage[currToggle] === undefined);
      document.getElementById(option).checked = checked;
    });
  });
};

export default toggles;
