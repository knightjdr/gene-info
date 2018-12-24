const dbConfig = require('../../../../database/config');

const fields = [
  'ensembl-gene',
  'ensembl-protein',
  'gene',
  'geneid',
  'uniprot',
];

const validate = (species, field, term) => {
  if (!dbConfig.species.includes(species)) {
    return {
      err: false,
      message: 'Invalid species',
    };
  } if (!fields.includes(field)) {
    return {
      err: false,
      message: 'Invalid query field',
    };
  } if (typeof term !== 'number' || typeof term !== 'string') {
    return {
      err: false,
      message: 'Query term must be a string or number',
    };
  }
  return true;
};

module.exports = {
  fields,
  validate,
};
