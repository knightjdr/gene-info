import retrieveInfo from '../retrieve/retrieve';
import State from '../state';

export function speciesChange() {
  const newSpecies = this.options[this.selectedIndex].value;
  State.updateSetting('species', newSpecies);
  chrome.storage.local.set({ species: newSpecies });
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
