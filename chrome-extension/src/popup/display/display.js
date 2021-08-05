import config from '../../config';
import toggleCompartments from './toggle-compartments';
import toggleTissues from './toggle-tissues';
import toggleHPA from './toggle-hpa';

export const updateDisplay = (species) => {
  toggleCompartments(species);
  toggleTissues({
    className: 'depmap',
    species,
    tissueID: 'depmap',
  });
  toggleTissues({
    className: 'protein-expression',
    species,
    tissueID: 'protein',
  });
  toggleTissues({
    className: 'rna-expression',
    species,
    tissueID: 'rna',
  });
  toggleHPA(species);
};

const display = () => {
  chrome.storage.local.get('species', (storage) => {
    const species = storage.species || config.defaultSpecies;
    updateDisplay(species);
  });
};

export default display;
