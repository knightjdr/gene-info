const config = {
  compartmentsThreshold: 5,
  fields: [
    'accession',
    'comment',
    'dbReference',
    'gene',
    'organism',
    'protein',
    'sequence',
  ],
  species: [
    'Arabidopsis thaliana',
    'Caenorhabditis elegans',
    'Danio rerio',
    'Dictyostelium discoideum',
    'Drosophila melanogaster',
    'Gallus gallus',
    'Homo sapiens',
    'Mus musculus',
    'Saccharomyces cerevisiae',
    'Xenopus laevis',
  ],
  speciesID: {
    3702: 'Arabidopsis thaliana',
    6239: 'Caenorhabditis elegans',
    7955: 'Danio rerio',
    44689: 'Dictyostelium discoideum',
    7227: 'Drosophila melanogaster',
    9031: 'Gallus gallus',
    9606: 'Homo sapiens',
    10090: 'Mus musculus',
    559292: 'Saccharomyces cerevisiae',
    8355: 'Xenopus laevis',
  },
};

module.exports = config;
