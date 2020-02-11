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
  proteomicsDBSpecies: [9606],
  speciesID: {
    3702: 'Arabidopsis thaliana',
    6239: 'Caenorhabditis elegans',
    7955: 'Danio rerio',
    44689: 'Dictyostelium discoideum',
    7227: 'Drosophila melanogaster',
    9031: 'Gallus gallus',
    9606: 'Homo sapiens',
    10090: 'Mus musculus',
    83333: 'Escherichia coli (K12)',
    99287: 'Salmonella Typhimurium (LT2)',
    559292: 'Saccharomyces cerevisiae',
    284812: 'Schizosaccharomyces pombe',
    8355: 'Xenopus laevis',
  },
};

module.exports = config;
