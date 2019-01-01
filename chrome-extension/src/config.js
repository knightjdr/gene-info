import dbConfig from '../../database/config';
import tissues from '../../database/files/rna-tissues';

const config = {
  compartmentSpecies: [
    'Arabidopsis thaliana',
    'Caenorhabditis elegans',
    'Drosophila melanogaster',
    'Homo sapiens',
    'Mus musculus',
    'Saccharomyces cerevisiae',
  ],
  defaultGoNamespace: 'cc',
  defaultSpecies: 'Homo sapiens',
  defaultTissues: {
    'Homo sapiens': ['HeLa', 'HEK 293'],
  },
  goNamespaces: ['bp', 'cc', 'mf'],
  species: dbConfig.species,
  tissues,
};

export default config;
