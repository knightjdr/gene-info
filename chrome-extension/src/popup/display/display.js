import compartments from './compartments';
import hpa from './hpa';

const display = () => {
  chrome.storage.local.get('select_species', (storage) => {
    const species = storage.select_species || 'Homo-sapiens';
    compartments(species);
    hpa(species);
  });
};

export default display;
