const fs = require('fs');
const readline = require('readline');

const shortNames = file => (
  new Promise((resolve, reject) => {
    const names = {};
    const lineReader = readline.createInterface({
      input: fs.createReadStream(file),
    });
    lineReader.on('line', (line) => {
      const fields = line.split('\t');
      const accession = fields[0];
      const name = fields[3];
      names[accession] = name;
    });
    lineReader.on('close', () => {
      resolve(names);
    });
    lineReader.on('error', (err) => {
      reject(err);
    });
  })
);

module.exports = shortNames;
