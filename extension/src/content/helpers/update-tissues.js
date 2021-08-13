import config from '../../config';
import State from '../state';

const updateTissues = ({ key, species, tissueID }) => {
  const tissueData = config.tissues[tissueID][species];
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

  chrome.storage.local.set({ [key]: defaultTissues });
  State.updateSetting(key, defaultTissues);
};

export default updateTissues;
