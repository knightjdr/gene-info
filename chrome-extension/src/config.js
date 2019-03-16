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
  defaultCheckedOptions: [
    'auto',
    'basic',
    'description',
    'domain',
    'go',
    'interactors',
    'links',
    'localization',
    'localization_compartments',
    'localization_hpa',
    'localization_uniprot',
    'rna_expression',
    'region',
  ],
  defaultGoNamespace: 'bp',
  defaultSettingOrder: [
    'basic',
    'links',
    'description',
    'domain',
    'rna_expression',
    'go',
    'localization',
    'interactors',
  ],
  defaultSpecies: 'Homo sapiens',
  defaultTissues: {
    'Homo sapiens': ['HEK 293', 'HeLa', 'Hep G2', 'U-2 OS'],
  },
  defaultUncheckedOptions: [
    'ctrl',
  ],
  expressionThresholds: {
    none: [0, 1],
    low: [1, 10],
    medium: [10, 50],
    high: [50],
  },
  goNamespaces: ['bp', 'cc', 'mf'],
  species: dbConfig.species,
  // The yeast species ID is what the compartment database uses which
  // differs from pfam
  speciesID: {
    'Arabidopsis thaliana': 3702,
    'Caenorhabditis elegans': 6239,
    'Danio rerio': 7955,
    'Dictyostelium discoideum': 44689,
    'Drosophila melanogaster': 7227,
    'Gallus gallus': 9031,
    'Homo sapiens': 9606,
    'Mus musculus': 10090,
    'Saccharomyces cerevisiae': 4932,
    'Xenopus laevis': 8355,
  },
  theme: 'light',
  tissues,
};

export default config;
