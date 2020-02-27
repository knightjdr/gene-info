import config from '../../config';
import State from '../state';

const updateTissues = (expressionType, species) => {
  const tissueData = config.tissues[expressionType][species];
  const defaultTissues = [];
  if (
    config.defaultTissues[expressionType][species]
    && config.defaultTissues[expressionType][species].length > 0
  ) {
    defaultTissues.push(...config.defaultTissues[expressionType][species]);
  } else if (tissueData) {
    if (tissueData.cells && tissueData.cells.length > 0) {
      defaultTissues.push(tissueData.cells[0]);
    }
    if (tissueData.tissues && tissueData.tissues.length > 0) {
      defaultTissues.push(tissueData.tissues[0]);
    }
  }

  const key = `${expressionType}_expression_tissues`;
  chrome.storage.local.set({ [key]: defaultTissues });
  State.updateSetting(key, defaultTissues);
};

export default updateTissues;
