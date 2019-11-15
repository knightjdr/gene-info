import config from '../../config';
import toggleCompartments from './toggle-compartments';
import toggleExpression from './toggle-expression';
import toggleHPA from './toggle-hpa';

export const updateDisplay = (species) => {
  toggleCompartments(species);
  toggleExpression('protein', species);
  toggleExpression('rna', species);
  toggleHPA(species);
};

const display = () => {
  chrome.storage.local.get('species', (storage) => {
    const species = storage.species || config.defaultSpecies;
    updateDisplay(species);
  });
};

export default display;
