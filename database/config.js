const config = {
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
    'Ciona intestinalis',
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
    9606: 'Homo sapiens',
  },
};

module.exports = config;
