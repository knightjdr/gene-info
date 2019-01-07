const fs = require('fs');
const LineByLineReader = require('line-by-line');

const readAnnotations = file => (
  new Promise((resolve, reject) => {
    const terms = {};
    if (fs.existsSync(file)) {
      const addTerm = (gene, term) => {
        if (terms[gene]) {
          terms[gene].push(term);
        } else {
          terms[gene] = [term];
        }
      };

      const lineReader = new LineByLineReader(file);
      lineReader.on('line', (line) => {
        if (!line.startsWith('!')) {
          const [, , gene, , term] = line.split('\t');
          addTerm(gene, term);
        }
      });
      lineReader.on('end', () => {
        resolve(terms);
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    } else {
      resolve(terms);
    }
  })
);

module.exports = readAnnotations;
