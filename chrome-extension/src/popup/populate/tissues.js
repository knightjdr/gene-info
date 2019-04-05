/* eslint no-new: 0 */

import SlimSelect from 'slim-select';

import config from '../../config';
import { updateTab } from '../helpers/message';

import '../../../../node_modules/slim-select/dist/slimselect.css';

const { defaultTissues, tissues } = config;

const changeTissues = (options) => {
  const selected = options.map(option => option.value);
  chrome.storage.local.set({ rna_expression_tissues: selected });
  updateTab('updateSetting', 'rna_expression_tissues', selected);
};

const storedTissues = (species, restore) => (
  new Promise((resolve) => {
    if (restore) {
      chrome.storage.local.set({ rna_expression_tissues: defaultTissues[species] });
      resolve(defaultTissues[species]);
      updateTab('updateSetting', 'rna_expression_tissues', defaultTissues[species]);
    } else {
      chrome.storage.local.get('rna_expression_tissues', (storage) => {
        resolve(storage.rna_expression_tissues || defaultTissues[species]);
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
      select: '#rna_expression_tissues',
    });
  }
};

export default tissueSelect;
