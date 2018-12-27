const dbConfig = require('../../../../database/config');
const detectField = require('./detect-field');

const fields = [
  'auto',
  'ensembl-gene',
  'ensembl-protein',
  'gene',
  'geneid',
  'refseq',
  'uniprot',
];

const validate = (species, field, term) => {
  if (!dbConfig.species.includes(species)) {
    return {
      err: true,
      message: 'Invalid species',
    };
  } if (!fields.includes(field)) {
    return {
      err: true,
      message: 'Invalid query field',
    };
  } if (
    !term
    || (
      typeof term !== 'number'
      && typeof term !== 'string'
    )
  ) {
    return {
      err: true,
      message: 'Query term must be a string or number',
    };
  }
  let validatedField = field;
  if (field === 'auto') {
    validatedField = detectField(term);
  }
  let validatedTerm = term;
  if (validatedField === 'geneid') {
    validatedTerm = Number(term);
  }
  return {
    field: validatedField,
    species,
    term: validatedTerm,
  };
};

module.exports = {
  fields,
  validate,
};
