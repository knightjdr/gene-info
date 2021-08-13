import config from '../../config';
import species from './species';
import populateTissues from './tissues';

const populate = () => {
  species();
  chrome.storage.local.get('select_species', (storage) => {
    const organism = storage.select_species || config.defaultSpecies;
    populateTissues({
      selectID: 'essentiality_tissues',
      species: organism,
      tissueID: 'essentiality',
    });
    populateTissues({
      selectID: 'protein_expression_tissues',
      species: organism,
      tissueID: 'protein',
    });
    populateTissues({
      selectID: 'rna_expression_tissues',
      species: organism,
      tissueID: 'rna',
    });
  });
};

export default populate;
