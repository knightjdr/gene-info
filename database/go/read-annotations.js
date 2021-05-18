const fs = require('fs');
const readline = require('readline');

const { convertMapToObj } = require('../helpers/convert-object-to-map');

const readAnnotations = file => (
  new Promise((resolve, reject) => {
    const terms = new Map();

    if (fs.existsSync(file)) {
      const addTerm = (gene, term) => {
        if (terms.has(gene)) {
          terms.set(gene, [...terms.get(gene), term]);
        } else {
          terms.set(gene, [term]);
        }
      };

      const fileStream = fs.createReadStream(file);

      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      });

      rl.on('line', (line) => {
        if (!line.startsWith('!')) {
          const [, , gene, , term] = line.split('\t');
          addTerm(gene, term);
        }
      });
      rl.on('close', () => {
        resolve(convertMapToObj(terms));
      });
      rl.on('error', (err) => {
        reject(err);
      });
    } else {
      resolve(terms);
    }
  })
);

module.exports = readAnnotations;
