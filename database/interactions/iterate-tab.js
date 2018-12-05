/* eslint no-param-reassign: 0 */

const fs = require('fs');
const readline = require('readline');

const sortArray = require('../helpers/sort-array');

/* Using parameter reassigment as it is much faster in the number of
** interactions can be ~1M */
const addGene = (interactions, source, target, evidence) => {
  if (interactions[source]) {
    interactions[source].push({ gene: target, evidence });
  } else {
    interactions[source] = [{ gene: target, evidence }];
  }
};

const sortInteractions = (interactions) => {
  const sortedInteractions = {};
  Object.entries(interactions).forEach(([gene, interactors]) => {
    sortedInteractions[gene] = sortArray.alphabeticalByTwoKeys(interactors, 'gene', 'evidence');
  });
  return sortedInteractions;
};

const uniqueInteractions = (interactions) => {
  const uniqueInt = {};
  Object.entries(interactions).forEach(([gene, interactors]) => {
    let last = {};
    uniqueInt[gene] = interactors.reduce((arrAccum, obj) => {
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
  });
  return uniqueInt;
};

const tabIterator = file => (
  new Promise((resolve, reject) => {
    let interactions = {};
    if (fs.existsSync(file)) {
      const lineReader = readline.createInterface({
        input: fs.createReadStream(file),
      });
      lineReader.on('line', (line) => {
        const [geneA, geneB, evidence] = line.split('\t');
        addGene(interactions, geneA, geneB, evidence);
        addGene(interactions, geneB, geneA, evidence);
      });
      lineReader.on('close', () => {
        interactions = sortInteractions(interactions);
        interactions = uniqueInteractions(interactions);
        resolve(interactions);
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    } else {
      resolve(interactions);
    }
  })
);

module.exports = tabIterator;
