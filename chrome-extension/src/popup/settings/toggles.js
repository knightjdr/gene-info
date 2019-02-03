const defaultCheckedOptions = [
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

const defaultUncheckedOptions = [
  'ctrl',
];

const setToggle = (toggle, undef = true) => {
  if (undef) {
    chrome.storage.local.get(toggle, (storage) => {
      const checked = Boolean(storage[toggle] || storage[toggle] === undefined);
      document.getElementById(toggle).checked = checked;
    });
  } else {
    chrome.storage.local.get(toggle, (storage) => {
      const checked = Boolean(storage[toggle]);
      document.getElementById(toggle).checked = checked;
    });
  }
};

const toggles = () => {
  defaultCheckedOptions.forEach((toggle) => {
    setToggle(toggle);
  });
  defaultUncheckedOptions.forEach((toggle) => {
    setToggle(toggle, false);
  });
};

export default toggles;
