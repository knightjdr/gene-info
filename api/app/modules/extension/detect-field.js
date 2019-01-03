const ensgRegex = new RegExp(/^ENS[A-Z]*G\d{11}$/, 'i');
const enspRegex = new RegExp(/^ENS[A-Z]*P\d{11}$/, 'i');
const refseqRegex = new RegExp(/^\w{2}_/, 'i');
const uniprotRegex = new RegExp(/^[OPQ][0-9][A-Z0-9]{3}[0-9]$|^[A-NR-Z][0-9]([A-Z][A-Z0-9]{2}[0-9]){1,2}$/, 'i');

const detectField = (term) => {
  if (ensgRegex.test(term)) {
    return 'ensembl-gene';
  } if (enspRegex.test(term)) {
    return 'ensembl-protein';
  } if (!Number.isNaN(Number(term))) {
    return 'geneid';
  } if (refseqRegex.test(term)) {
    return 'refseq';
  } if (uniprotRegex.test(term)) {
    return 'uniprot';
  }
  return 'gene';
};

module.exports = detectField;
