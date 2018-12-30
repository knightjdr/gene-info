/* eslint no-new: 0 */

import SlimSelect from 'slim-select';

import tissueOptions from '../../../../database/files/rna-tissues';
import updateTab from '../listeners/update-tab';

import '../../../../node_modules/slim-select/dist/slimselect.css';

const defaultTissues = ['HeLa', 'HEK 293', 'U-2 OS'];

const storedTissues = () => (
  new Promise((resolve) => {
    chrome.storage.local.get('select_tissues', (storage) => {
      resolve(storage.select_tissues || defaultTissues);
    });
  })
);

const tissues = async () => {
  // const select = document.getElementById('select_tissues');
  const species = document.getElementById('select_species').value.replace('-', ' ');
  const selectedTissues = await storedTissues();

  new SlimSelect({
    closeOnSelect: false,
    data: [
      { placeholder: true, text: 'Select cells/tissues' },
      {
        label: 'Cells',
        options: tissueOptions[species].cells.map(cell => ({
          selected: selectedTissues.includes(cell),
          text: cell,
        })),
      },
      {
        label: 'Tissues',
        options: tissueOptions[species].tissues.map(tissue => ({
          selected: selectedTissues.includes(tissue),
          text: tissue,
        })),
      },
    ],
    onChange: (options) => {
      const selected = options.map(option => option.value);
      chrome.storage.local.set({ select_tissues: selected });
      updateTab({ action: 'updateTissues', selected });
    },
    select: '.slim-select',
  });
};

export default tissues;
