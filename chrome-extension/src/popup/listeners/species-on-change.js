import { updateTab } from '../helpers/message';
import { updateDisplay } from '../display/display';
import updateTissues from '../populate/tissues';

const speciesOnChange = function change() {
  const { value } = this;
  chrome.storage.local.set({ species: value });
  updateTab('updateSetting', 'species', value);
  updateDisplay(value);
  updateTissues({
    expressionType: 'depmap',
    restoreDefaults: true,
    selectID: 'depmap_tissues',
    species: value,
  });
  updateTissues({
    expressionType: 'protein',
    restoreDefaults: true,
    selectID: 'protein_expression_tissues',
    species: value,
  });
  updateTissues({
    expressionType: 'rna',
    restoreDefaults: true,
    selectID: 'rna_expression_tissues',
    species: value,
  });
};

export default speciesOnChange;
