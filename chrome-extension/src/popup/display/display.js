import compartments from './compartments';
import config from '../../config';
import hpa from './hpa';

const display = () => {
  chrome.storage.local.get('select_species', (storage) => {
    const species = storage.select_species || config.defaultSpecies;
    compartments(species);
    hpa(species);
  });
};

export default display;
