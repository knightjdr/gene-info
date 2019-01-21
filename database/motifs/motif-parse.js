/* eslint no-console: 0 */

const fs = require('fs');
const readline = require('readline');

const sortArray = require('../helpers/sort-array');

const handleLines = file => (
  new Promise((resolve, reject) => {
    const motifs = {};
    const lineReader = readline.createInterface({
      input: fs.createReadStream(file),
    });
    lineReader.on('line', (line) => {
      const [uniprot, name, start, end] = line.split('\t');
      const motif = {
        name,
        start: Number(start),
        end: Number(end),
      };
      if (motifs[uniprot]) {
        motifs[uniprot].push(motif);
      } else {
        motifs[uniprot] = [motif];
      }
    });
    lineReader.on('close', () => {
      resolve(motifs);
    });
    lineReader.on('error', (err) => {
      reject(err);
    });
  })
);

const sortMotifs = (motifs) => {
  const sortedMotifs = {};
  Object.entries(motifs).forEach(([gene, arr]) => {
    sortedMotifs[gene] = sortArray.numericalByKey(arr, 'start', 'asc');
  });
  return sortedMotifs;
};

const motifParse = motifFile => (
  new Promise((resolve, reject) => {
    handleLines(motifFile)
      .then((motifs) => {
        const sorted = sortMotifs(motifs);
        resolve(sorted);
      })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = motifParse;
