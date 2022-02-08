import dbConfig from '../../database/config';
import essentialityTissues from '../../database/files/essentiality-tissues';
import proteinTissues from '../../database/files/protein-tissues';
import rnaTissues from '../../database/files/rna-tissues';

const species = Object.values(dbConfig.speciesID);
species.sort();

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
    'essentiality',
    'go',
    'interactors',
    'links',
    'localization',
    'localization_compartments',
    'localization_hpa',
    'localization_uniprot',
    'pathology',
    'pathway',
    'protein_expression',
    'rna_expression',
    'region',
  ],
  defaultGoNamespace: 'bp',
  defaultInputs: {
    essentiality_codependencies: 5,
  },
  defaultSettingOrder: [
    'basic',
    'links',
    'description',
    'domain',
    'expression',
    'go',
    'localization',
    'essentiality',
    'pathology',
    'pathway',
    'interactors',
  ],
  defaultSpecies: 'Homo sapiens',
  defaultTissues: {
    essentiality: {
      'Homo sapiens': ['HEPG2', 'JURKAT', 'U2OS'],
    },
    protein: {
      'Homo sapiens': ['HEK-293', 'HeLa', 'Hep-G2', 'U2-OS'],
    },
    rna: {
      'Homo sapiens': ['HEK 293', 'HeLa', 'Hep G2', 'U-2 OS'],
    },
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
  outages: 'https://raw.githubusercontent.com/knightjdr/gene-info/master/outages.json',
  species,
  // The yeast species ID is what the compartment database uses.
  speciesID: {
    'Arabidopsis thaliana': 3702,
    'Caenorhabditis elegans': 6239,
    'Drosophila melanogaster': 7227,
    'Homo sapiens': 9606,
    'Mus musculus': 10090,
    'Saccharomyces cerevisiae': 4932,
  },
  theme: 'light',
  tissues: {
    essentiality: essentialityTissues,
    protein: proteinTissues,
    rna: rnaTissues,
  },
};

export default config;
