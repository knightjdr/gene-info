import species from './species';
import tissues from './tissues';

const populate = () => {
  species();
  chrome.storage.local.get('select_species', (storage) => {
    const organism = storage.select_species || 'Homo-sapiens';
    tissues(organism);
  });
};

export default populate;
