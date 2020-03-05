const dbConfig = require('../../../../database/config');
const detectField = require('./detect-field');

const fields = [
  'auto',
  'ensembl-gene',
  'ensembl-protein',
  'gene',
  'geneid',
  'locus',
  'nextprot',
  'orf',
  'refseq',
  'uniprot',
];

const validate = (species, field, term) => {
  if (!Object.values(dbConfig.speciesID).includes(species)) {
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
    validatedField = detectField(term, species);
  }
  let validatedTerm = term.trim();
  if (validatedField === 'geneid') {
    validatedTerm = Number(term);
  } else if (validatedField === 'nextprot') {
    validatedField = 'uniprot';
    validatedTerm = term.replace('NX_', '');
  } else if (validatedField === 'refseq') {
    [validatedTerm] = term.split('.');
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
