import compartments from './compartments';
import config from '../../config';
import expression from './expression';
import hpa from './hpa';

export const updateDisplay = (species) => {
  compartments(species);
  expression('protein', species);
  expression('rna', species);
  hpa(species);
};

const display = () => {
  chrome.storage.local.get('species', (storage) => {
    const species = storage.species || config.defaultSpecies;
    updateDisplay(species);
  });
};

export default display;
