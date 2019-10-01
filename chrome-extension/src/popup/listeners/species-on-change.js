import { updateTab } from '../helpers/message';
import { updateDisplay } from '../display/display';
import updateTissues from '../populate/tissues';

const speciesOnChange = function change() {
  const { value } = this;
  chrome.storage.local.set({ species: value });
  updateTab('updateSetting', 'species', value);
  updateDisplay(value);
  updateTissues('protein', value, true);
  updateTissues('rna', value, true);
};

export default speciesOnChange;
