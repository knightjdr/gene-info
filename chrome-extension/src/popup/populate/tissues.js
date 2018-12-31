/* eslint no-new: 0 */

import SlimSelect from 'slim-select';

import config from '../../config';
import updateTab from '../listeners/update-tab';

import '../../../../node_modules/slim-select/dist/slimselect.css';

const { defaultTissues, tissues } = config;

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
      updateTab({ action: 'updateTissues', selected: defaultTissues[species] });
    } else {
      chrome.storage.local.get('select_tissues', (storage) => {
        resolve(storage.select_tissues || defaultTissues[species]);
      });
    }
  })
);

const tissueSelect = async (species, restoreDefaults = false) => {
  if (tissues[species]) {
    const selectedTissues = await storedTissues(species, restoreDefaults);
    const data = [
      { placeholder: true, text: 'Select cells/tissues' },
    ];
    if (tissues[species].cells.length > 0) {
      data.push({
        label: 'Cells',
        options: tissues[species].cells.map(cell => ({
          selected: selectedTissues.includes(cell),
          text: cell,
        })),
      });
    }
    if (tissues[species].tissues.length > 0) {
      data.push({
        label: 'Tissues',
        options: tissues[species].tissues.map(tissue => ({
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
