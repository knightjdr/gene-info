const arrayUnique = require('../helpers/array-unique');
const findGene = require('./find-gene');
const getComments = require('./get-comments');
const getDBRefs = require('./get-dbrefs');
const { getNames } = require('./get-names');
const getSequence = require('./get-sequence');
const sortArray = require('../helpers/sort-array');

/* Parses a Uniprot XML entry that has been converted to a JS object with
** xml2js */
const entryParse = (entry) => {
  const genes = findGene(entry.gene);
  if (genes.primary) {
    const comments = getComments(entry.comment);
    const names = getNames(entry.protein[0]);
    const refs = getDBRefs(entry.dbReference);
    const sequence = getSequence(entry.sequence[0]);
    return {
      alternativeNames: names.alternative,
      biogrid: refs.biogrid,
      description: comments.description,
      'ensembl-gene': refs['ensembl-gene'],
      'ensembl-protein': refs['ensembl-protein'],
      fullname: names.full,
      gene: genes.primary,
      geneid: refs.geneid,
      go: {
        c: sortArray.alphabeticalByKey(refs.go.c, 'term'),
        f: sortArray.alphabeticalByKey(refs.go.f, 'term'),
        p: sortArray.alphabeticalByKey(refs.go.p, 'term'),
      },
      hgnc: refs.hgnc,
      length: sequence.length,
      localization: {
        uniprot: sortArray.alphabetical(arrayUnique(comments.localization)),
      },
      locus: genes.locus,
      mw: sequence.mw,
      orf: genes.orf,
      proteomicsdb: refs.proteomicsdb,
      refseq: refs.refseq,
      synonyms: sortArray.alphabetical(genes.synonyms),
      uniprot: entry.accession,
    };
  }
  return null;
};

module.exports = entryParse;
