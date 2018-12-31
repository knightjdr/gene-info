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
  defaultSpecies: 'Homo sapiens',
  defaultTissues: {
    'Homo sapiens': ['HeLa', 'HEK 293', 'U-2 OS'],
  },
  species: dbConfig.species,
  tissues,
};

export default config;
