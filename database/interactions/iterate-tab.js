const fs = require('fs');
const readline = require('readline');

const sortArray = require('../helpers/sort-array');

const addGene = (interactions, source, target, evidence) => {
  if (Object.prototype.hasOwnProperty.call(interactions, source)) {
    return {
      ...interactions,
      [source]: [
        ...interactions[source],
        { gene: target, evidence },
      ],
    };
  }
  return {
    ...interactions,
    [source]: [{ gene: target, evidence }],
  };
};

const sortInteractions = interactions => (
  Object.entries(interactions).reduce((accum, [gene, interactors]) => ({
    ...accum,
    [gene]: sortArray.alphabeticalByTwoKeys(interactors, 'gene', 'evidence'),
  }), {})
);

const uniqueInteractions = interactions => (
  Object.entries(interactions).reduce((accum, [gene, interactors]) => {
    let last = {};
    const unique = interactors.reduce((arrAccum, obj) => {
      if (
        obj.gene !== last.gene
        || obj.evidence !== last.evidence
      ) {
        last = obj;
        return [
          ...arrAccum,
          obj,
        ];
      }
      return arrAccum;
    }, []);
    return {
      ...accum,
      [gene]: unique,
    };
  }, {})
);

const tabIterator = file => (
  new Promise((resolve, reject) => {
    let interactions = {};

    const lineReader = readline.createInterface({
      input: fs.createReadStream(file),
    });
    lineReader.on('line', (line) => {
      const [geneA, geneB, evidence] = line.split('\t');
      interactions = addGene(interactions, geneA, geneB, evidence);
      interactions = addGene(interactions, geneB, geneA, evidence);
    });
    lineReader.on('close', () => {
      interactions = sortInteractions(interactions);
      interactions = uniqueInteractions(interactions);
      resolve(interactions);
    });
    lineReader.on('error', (err) => {
      reject(err);
    });
  })
);

module.exports = tabIterator;
