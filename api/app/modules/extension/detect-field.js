const ensgRegex = new RegExp(/^ENS[A-Z]*G\d{11}$/, 'i');
const enspRegex = new RegExp(/^ENS[A-Z]*P\d{11}$/, 'i');
const locusRegex = new RegExp(/^Y\w{6,}$/, 'i');
const nextprotRegex = new RegExp(/^NX_[OPQ][0-9][A-Z0-9]{3}[0-9]$|^NX_[A-NR-Z][0-9]([A-Z][A-Z0-9]{2}[0-9]){1,2}$/, 'i');
const orfRegex = new RegExp(/^CG\d{4,5}$/, 'i');
const refseqRegex = new RegExp(/^\w{2}_/, 'i');
const uniprotRegex = new RegExp(/^[OPQ][0-9][A-Z0-9]{3}[0-9]$|^[A-NR-Z][0-9]([A-Z][A-Z0-9]{2}[0-9]){1,2}$/, 'i');

const detectField = (term, species) => {
  if (ensgRegex.test(term)) {
    return 'ensembl-gene';
  } if (enspRegex.test(term)) {
    return 'ensembl-protein';
  } if (!Number.isNaN(Number(term))) {
    return 'geneid';
  } if (nextprotRegex.test(term)) {
    return 'nextprot';
  } if (refseqRegex.test(term)) {
    return 'refseq';
  } if (uniprotRegex.test(term)) {
    return 'uniprot';
  } if (
    species === 'Saccharomyces cerevisiae'
    && locusRegex.test(term)
  ) {
    return 'locus';
  } if (
    species === 'Drosophila melanogaster'
    && orfRegex.test(term)
  ) {
    return 'orf';
  }
  return 'gene';
};

module.exports = detectField;
