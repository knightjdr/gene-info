/* eslint no-param-reassign: 0 */

const fs = require('fs');
const readline = require('readline');

const readJson = require('../helpers/read-json');

const handleLines = (file, path, speciesIDs, uniprot) => (
  new Promise((resolve, reject) => {
    const streams = Object.values(speciesIDs).reduce((accum, specie) => {
      const writeStream = fs.createWriteStream(`${path}/${specie}.tsv`, { flags: 'w' });
      accum[specie] = writeStream;
      return accum;
    }, {});

    let isHeader = true;
    const lineReader = readline.createInterface({
      input: fs.createReadStream(file),
    });
    lineReader.on('line', (line) => {
      if (!isHeader) {
        const fields = line.split('\t');
        const uniprotAccession = fields[0];
        const pfamAccession = fields[4];
        const seqStart = fields[5];
        const seqEnd = fields[6];
        if (uniprot[uniprotAccession]) {
          const organism = uniprot[uniprotAccession];
          streams[organism].write(`${uniprotAccession}\t${pfamAccession}\t${seqStart}\t${seqEnd}\n`);
        }
      }
      isHeader = false;
    });
    lineReader.on('close', () => {
      Object.values(streams).forEach((stream) => {
        stream.end();
      });
      resolve();
    });
    lineReader.on('error', (err) => {
      reject(err);
    });
  })
);

const minPfam = (file, path, speciesIDs, uniprotIDs, skip) => (
  new Promise((resolve, reject) => {
    if (skip) {
      resolve();
    } else {
      readJson(uniprotIDs)
        .then(uniprot => handleLines(file, path, speciesIDs, uniprot))
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    }
  })
);

module.exports = minPfam;
