/* eslint no-param-reassign: 0 */

const fs = require('fs');
const readline = require('readline');

const minTab = (file, path, speciesIDs, skip) => (
  new Promise((resolve, reject) => {
    if (skip) {
      resolve();
    } else {
      const geneRegex = new RegExp(/uniprotkb:([^(]+)\(gene name\)/);
      const methodRegex = new RegExp(/\(([^)]+)\)/);
      const speciesRegex = new RegExp(/taxid:(\d+)/);

      const streams = Object.values(speciesIDs).reduce((accum, specie) => {
        const writeStream = fs.createWriteStream(`${path}/${specie}.tab`, { flags: 'a' });
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
          const organismAMatches = fields[9].match(speciesRegex);
          const organismBMatches = fields[10].match(speciesRegex);
          if (organismAMatches && organismBMatches) {
            const [, organismA] = organismAMatches;
            const [, organismB] = organismBMatches;
            const organisms = [];
            if (Object.prototype.hasOwnProperty.call(speciesIDs, organismA)) {
              organisms.push(speciesIDs[organismA]);
            }
            if (Object.prototype.hasOwnProperty.call(speciesIDs, organismB)) {
              organisms.push(speciesIDs[organismB]);
            }
            const uniqueOrganisms = [...new Set(organisms)];
            if (uniqueOrganisms.length > 0) {
              const genesA = fields[4].match(geneRegex);
              const genesB = fields[5].match(geneRegex);
              if (genesA && genesB) {
                const [, geneA] = genesA;
                const [, geneB] = genesB;
                let [, method] = fields[6].match(methodRegex);
                method = method.toLowerCase().replace(/-/, ' ');
                uniqueOrganisms.forEach((organism) => {
                  streams[organism].write(`intact\t${geneA}\t${geneB}\t${method}\n`);
                });
              }
            }
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
