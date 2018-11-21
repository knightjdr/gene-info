const arrayUnique = require('../helpers/array-unique');
const findGene = require('./find-gene');
const findScientific = require('./find-scientific');
const getComments = require('./get-comments');
const getDBRefs = require('./get-dbrefs');
const getSequence = require('./get-sequence');
const sortArray = require('../helpers/sort-array');

const species = [
  'Homo sapiens',
];

const uniprotParse = js => (
  new Promise((resolve) => {
    const parsed = species.reduce((accum, specie) => ({
      ...accum,
      [specie]: [],
    }), {});
    js.uniprot.entry.forEach((entry) => {
      const genes = findGene(entry.gene);
      const organism = findScientific(entry.organism[0].name);
      if (species.includes(organism) && genes.primary) {
        const comments = getComments(entry.comment);
        const refs = getDBRefs(entry.dbReference);
        const sequence = getSequence(entry.sequence[0]);
        parsed[organism].push({
          biogrid: refs.biogrid,
          description: comments.description,
          'ensembl-gene': refs['ensembl-gene'],
          'ensembl-protein': refs['ensembl-protein'],
          fullname: entry.protein[0].recommendedName[0].fullName[0] || '',
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
          mw: sequence.mw,
          proteomicsdb: refs.proteomicsdb,
          synonyms: sortArray.alphabetical(genes.synonyms),
          uniprot: entry.accession[0],
        });
      }
    });
    console.log(parsed['Homo sapiens'][22].go);
    resolve(parsed);
  })
);

module.exports = uniprotParse;
