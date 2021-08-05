/* eslint no-new: 0 */

import SlimSelect from 'slim-select';

import config from '../../config';
import { updateTab } from '../helpers/message';

import '../../../node_modules/slim-select/dist/slimselect.css';

const changeTissues = selectID => (options) => {
  const selected = options.map(option => option.value);
  chrome.storage.local.set({ [selectID]: selected });
  updateTab('updateSetting', selectID, selected);
};

const defineDefaultTissues = (tissueID, species, tissueData) => {
  const defaultTissues = [];
  if (
    config.defaultTissues[tissueID][species]
    && config.defaultTissues[tissueID][species].length > 0
  ) {
    defaultTissues.push(...config.defaultTissues[tissueID][species]);
  } else if (tissueData) {
    if (tissueData.cells && tissueData.cells.length > 0) {
      defaultTissues.push(tissueData.cells[0]);
    }
    if (tissueData.tissues && tissueData.tissues.length > 0) {
      defaultTissues.push(tissueData.tissues[0]);
    }
  }

  return defaultTissues;
};

const storedTissues = (defaultTissues, selectID, restore) => (
  new Promise((resolve) => {
    if (restore) {
      chrome.storage.local.set({ [selectID]: defaultTissues });
      resolve(defaultTissues);
      updateTab('updateSetting', selectID, defaultTissues);
    } else {
      chrome.storage.local.get(selectID, (storage) => {
        resolve(storage[selectID] || defaultTissues);
      });
    }
  })
);

const defineOptions = (inputOptions) => {
  const defaultOptions = {
    restoreDefaults: false,
  };

  return {
    ...defaultOptions,
    ...inputOptions,
  };
};

const tissueSelect = async (inputOptions = {}) => {
  const {
    tissueID,
    restoreDefaults,
    selectID,
    species,
  } = defineOptions(inputOptions);

  const tissueData = config.tissues[tissueID][species];
  const defaultTissues = defineDefaultTissues(tissueID, species, tissueData);

  if (tissueData) {
    const selectedTissues = await storedTissues(defaultTissues, selectID, restoreDefaults);
    const data = [
      { placeholder: true, text: 'Select cells/tissues' },
    ];
    if (tissueData.cells.length > 0) {
      data.push({
        label: 'Cells',
        options: tissueData.cells.map(cell => ({
          selected: selectedTissues.includes(cell),
          text: cell,
        })),
      });
    }
    if (tissueData.tissues.length > 0) {
      data.push({
        label: 'Tissues',
        options: tissueData.tissues.map(tissue => ({
          selected: selectedTissues.includes(tissue),
          text: tissue,
        })),
      });
    }

    new SlimSelect({
      closeOnSelect: false,
      data,
      onChange: changeTissues(selectID),
      select: `#${selectID}`,
    });
  }
};

export default tissueSelect;
