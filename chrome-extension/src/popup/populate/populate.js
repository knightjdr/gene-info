import config from '../../config';
import species from './species';
import tissues from './tissues';

const populate = () => {
  species();
  chrome.storage.local.get('select_species', (storage) => {
    const organism = storage.select_species || config.defaultSpecies;
    tissues(organism);
  });
};

export default populate;
