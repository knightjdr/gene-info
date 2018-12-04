const fs = require('fs');
const readline = require('readline');

const shortNames = require('./short-names');
const sortArray = require('../helpers/sort-array');

const handleLines = (file, names) => (
  new Promise((resolve, reject) => {
    const domains = {};
    const lineReader = readline.createInterface({
      input: fs.createReadStream(file),
    });
    lineReader.on('line', (line) => {
      const [uniprot, pfam, start, end] = line.split('\t');
      const domain = {
        name: pfam && names[pfam] ? names[pfam] : 'unknown',
        pfam,
        start: Number(start),
        end: Number(end),
      };
      if (domains[uniprot]) {
        domains[uniprot].push(domain);
      } else {
        domains[uniprot] = [domain];
      }
    });
    lineReader.on('close', () => {
      resolve(domains);
    });
    lineReader.on('error', (err) => {
      reject(err);
    });
  })
);

const sortDomains = (domains) => {
  const sortedDomains = {};
  Object.entries(domains).forEach(([gene, arr]) => {
    sortedDomains[gene] = sortArray.numericalByKey(arr, 'start', 'asc');
  });
  return sortedDomains;
};

const domainParse = (domainFile, namesFile) => (
  new Promise((resolve, reject) => {
    shortNames(namesFile)
      .then(names => handleLines(domainFile, names))
      .then((domains) => {
        const sorted = sortDomains(domains);
        resolve(sorted);
      })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = domainParse;
