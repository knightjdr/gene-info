import retrieveInfo from '../retrieve/retrieve';
import State from '../state';
import updateTissues from '../helpers/update-tissues';

export function speciesChange() {
  const newSpecies = this.options[this.selectedIndex].value;
  chrome.storage.local.set({ species: newSpecies });
  State.updateSetting('species', newSpecies);
  updateTissues('protein', newSpecies);
  updateTissues('rna', newSpecies);
  retrieveInfo({}, State.searchTerm, true);
}

export const removeSpeciesListener = () => {
  const el = State.shadowRoot.querySelector('#species_select');
  if (el) {
    el.removeEventListener('change', speciesChange);
  }
};

export const addSpeciesListener = () => {
  const el = State.shadowRoot.querySelector('#species_select');
  if (el) {
    el.addEventListener('change', speciesChange);
  }
};
