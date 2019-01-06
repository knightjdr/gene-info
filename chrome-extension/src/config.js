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
  expressionThresholds: {
    none: [0, 1],
    low: [1, 10],
    medium: [10, 50],
    high: [50],
  },
  goNamespaces: ['bp', 'cc', 'mf'],
  species: dbConfig.species,
  tissues,
};

export default config;
