/* eslint no-console: 0 */

const fs = require('fs');
const readline = require('readline');

const arrSortByTwoKeys = require('../helpers/arr-sort-by-two-keys');

const handleLines = file => (
  new Promise((resolve, reject) => {
    const regions = {};
    const lineReader = readline.createInterface({
      input: fs.createReadStream(file),
    });
    lineReader.on('line', (line) => {
      const [uniprot, name, start, end] = line.split('\t');
      const region = {
        name,
        start: Number(start),
        end: Number(end),
        type: 'region',
      };
      if (regions[uniprot]) {
        regions[uniprot].push(region);
      } else {
        regions[uniprot] = [region];
      }
    });
    lineReader.on('close', () => {
      resolve(regions);
    });
    lineReader.on('error', (err) => {
      reject(err);
    });
  })
);

const sortRegions = (regions) => {
  const sortedRegions = {};
  Object.entries(regions).forEach(([gene, arr]) => {
    sortedRegions[gene] = arrSortByTwoKeys(arr, 'start', 'end', 'asc', 'numeric', 'numeric');
  });
  return sortedRegions;
};

const regionParse = regionFile => (
  new Promise((resolve, reject) => {
    handleLines(regionFile)
      .then((regions) => {
        const sorted = sortRegions(regions);
        resolve(sorted);
      })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = regionParse;
