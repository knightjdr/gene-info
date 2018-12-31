import displayCompartments from '../display/compartments';
import displayHPA from '../display/hpa';
import updateTab from './update-tab';
import updateTissues from '../populate/tissues';

const speciesOnChange = function change() {
  const { value } = this;
  chrome.storage.local.set({ select_species: value });
  updateTab({ action: 'updateSelect', type: 'species', value });
  displayCompartments(value);
  displayHPA(value);
  updateTissues(value, true);
};

export default speciesOnChange;
