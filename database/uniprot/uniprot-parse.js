const findGene = require('./find-gene');
const findScientific = require('./find-scientific');

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
      const organism = findScientific(entry.organism[0].name);
      if (species.includes(organism)) {
        const genes = findGene(entry.gene[0].name);
        parsed[organism].push({
          fullname: entry.protein[0].recommendedName[0].fullName[0] || '',
          gene: genes.primary,
          synonyms: genes.synonyms,
          uniprot: entry.accession[0],
        });
      }
    });
    console.log(parsed);
    resolve(parsed);
  })
);

module.exports = uniprotParse;
