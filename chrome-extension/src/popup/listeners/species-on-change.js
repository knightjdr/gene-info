import displayCompartments from '../display/compartments';
import displayHPA from '../display/hpa';
import { updateTab } from '../helpers/message';
import updateTissues from '../populate/tissues';

const speciesOnChange = function change() {
  const { value } = this;
  chrome.storage.local.set({ species: value });
  updateTab('updateSetting', 'species', value);
  displayCompartments(value);
  displayHPA(value);
  updateTissues(value, true);
};

export default speciesOnChange;
