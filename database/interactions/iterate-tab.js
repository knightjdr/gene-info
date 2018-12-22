/* eslint no-param-reassign: 0 */
/* eslint no-console: 0 */

const fs = require('fs');
const readline = require('readline');

const arrayUnique = require('../helpers/array-unique');
const sortArray = require('../helpers/sort-array');

/* Using parameter reassigment as it is much faster as the number of
** interactions can be ~1M */
const addGene = (interactions, source, target, evidence, database) => {
  if (interactions[source] && interactions[source][target]) {
    interactions[source][target][database].push(evidence);
  } else if (interactions[source]) {
    interactions[source][target] = {
      biogrid: [],
      intact: [],
    };
    interactions[source][target][database].push(evidence);
  } else {
    interactions[source] = {};
    interactions[source][target] = {
      biogrid: [],
      intact: [],
    };
    interactions[source][target][database].push(evidence);
  }
};

const sortInteractions = (interactions) => {
  const sortedInteractions = {};
  Object.keys(interactions).forEach((source) => {
    sortedInteractions[source] = Object.keys(interactions[source]).map((target) => {
      const sortedBiogrid = sortArray.alphabetical(interactions[source][target].biogrid);
      const sortedIntact = sortArray.alphabetical(interactions[source][target].intact);
      return {
        gene: target,
        biogrid: sortedBiogrid,
        intact: sortedIntact,
      };
    });
    sortedInteractions[source] = sortArray.alphabeticalByKey(sortedInteractions[source], 'gene');
  });
  return sortedInteractions;
};

// Remove any duplicated evidences.
const uniqueEvidence = (interactions) => {
  const uniqueInt = {};
  Object.entries(interactions).forEach(([source, targets]) => {
    uniqueInt[source] = targets.map(obj => ({
      gene: obj.gene,
      biogrid: arrayUnique(obj.biogrid),
      intact: arrayUnique(obj.intact),
    }));
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
        const [database, geneA, geneB, evidence] = line.split('\t');
        addGene(interactions, geneA, geneB, evidence, database);
        addGene(interactions, geneB, geneA, evidence, database);
      });
      lineReader.on('close', () => {
        interactions = sortInteractions(interactions);
        interactions = uniqueEvidence(interactions);
        resolve(interactions);
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    } else {
      console.error(`Missing interactions file: ${file}`);
      resolve(interactions);
    }
  })
);

module.exports = tabIterator;
