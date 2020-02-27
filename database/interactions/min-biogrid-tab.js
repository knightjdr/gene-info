/* eslint no-param-reassign: 0 */

const fs = require('fs');
const readline = require('readline');

const minTab = (file, path, speciesIDs, skip) => (
  new Promise((resolve, reject) => {
    if (skip) {
      resolve();
    } else {
      const streams = Object.values(speciesIDs).reduce((accum, specie) => {
        const writeStream = fs.createWriteStream(`${path}/${specie}.tab`, { flags: 'w' });
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
          const organismA = fields[15];
          const organismB = fields[16];
          const organisms = [];
          if (speciesIDs[organismA]) {
            organisms.push(speciesIDs[organismA]);
          }
          if (speciesIDs[organismB]) {
            organisms.push(speciesIDs[organismB]);
          }
          const uniqueOrganisms = [...new Set(organisms)];
          if (uniqueOrganisms.length > 0) {
            const geneA = fields[7];
            const geneB = fields[8];
            const method = fields[11].toLowerCase().replace(/-/, ' ');
            uniqueOrganisms.forEach((organism) => {
              streams[organism].write(`biogrid\t${geneA}\t${geneB}\t${method}\n`);
            });
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
    }
  })
);

module.exports = minTab;
