/* eslint no-new: 0 */

import SlimSelect from 'slim-select';

import tissueOptions from '../../../../database/files/rna-tissues';
import updateTab from '../listeners/update-tab';

import '../../../../node_modules/slim-select/dist/slimselect.css';

const defaultTissues = {
  'Homo sapiens': ['HeLa', 'HEK 293', 'U-2 OS'],
};

const changeTissues = (options) => {
  const selected = options.map(option => option.value);
  chrome.storage.local.set({ select_tissues: selected });
  updateTab({ action: 'updateTissues', selected });
};

const storedTissues = (species, restore) => (
  new Promise((resolve) => {
    if (restore) {
      chrome.storage.local.set({ select_tissues: defaultTissues[species] });
      resolve(defaultTissues[species]);
    } else {
      chrome.storage.local.get('select_tissues', (storage) => {
        resolve(storage.select_tissues || defaultTissues[species]);
      });
    }
  })
);

const tissueSelect = async (speciesValue, restoreDefaults = false) => {
  const species = speciesValue.replace('-', ' ');
  if (tissueOptions[species]) {
    const selectedTissues = await storedTissues(species, restoreDefaults);
    const data = [
      { placeholder: true, text: 'Select cells/tissues' },
    ];
    if (tissueOptions[species].cells.length > 0) {
      data.push({
        label: 'Cells',
        options: tissueOptions[species].cells.map(cell => ({
          selected: selectedTissues.includes(cell),
          text: cell,
        })),
      });
    }
    if (tissueOptions[species].tissues.length > 0) {
      data.push({
        label: 'Tissues',
        options: tissueOptions[species].tissues.map(tissue => ({
          selected: selectedTissues.includes(tissue),
          text: tissue,
        })),
      });
    }

    new SlimSelect({
      closeOnSelect: false,
      data,
      onChange: changeTissues,
      select: '.slim-select',
    });
  }
};

export default tissueSelect;
