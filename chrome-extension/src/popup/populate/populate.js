import config from '../../config';
import species from './species';
import rnaTissues from './tissues';

const populate = () => {
  species();
  chrome.storage.local.get('select_species', (storage) => {
    const organism = storage.select_species || config.defaultSpecies;
    rnaTissues('protein', organism);
    rnaTissues('rna', organism);
  });
};

export default populate;
