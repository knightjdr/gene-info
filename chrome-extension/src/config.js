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
  defaultGoNamespace: 'bp',
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
  speciesID: {
    'Arabidopsis thaliana': 3702,
    'Caenorhabditis elegans': 6239,
    'Danio rerio': 7955,
    'Dictyostelium discoideum': 44689,
    'Drosophila melanogaster': 7227,
    'Gallus gallus': 9031,
    'Homo sapiens': 9606,
    'Mus musculus': 10090,
    'Saccharomyces cerevisiae': 559292,
    'Xenopus laevis': 8355,
  },
  tissues,
};

export default config;
