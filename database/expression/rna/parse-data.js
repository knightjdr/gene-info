const fs = require('fs');
const readline = require('readline');

const arrSort = require('../../helpers/arr-sort');
const mergeTissues = require('../merge-tissues');

const parseTissue = file => (
  new Promise((resolve, reject) => {
    if (fs.existsSync(file)) {
      const expression = {};
      const types = {};

      let header = true;
      const lineReader = readline.createInterface({
        input: fs.createReadStream(file),
      });
      lineReader.on('line', (line) => {
        if (!header) {
          const [accession, , cell, value] = line.split('\t');
          if (expression[accession]) {
            expression[accession][cell] = Number(value);
          } else {
            expression[accession] = {
              [cell]: Number(value),
            };
          }
          if (!types[cell]) {
            types[cell] = true;
          }
        }
        header = false;
      });
      lineReader.on('close', () => {
        resolve({
          expression,
          types: arrSort.alphabetical(Object.keys(types)),
        });
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    } else {
      resolve({
        expression: {},
        types: [],
      });
    }
  })
);

const parseData = async (cells, tissues) => {
  const [cellData, tissueData] = await Promise.all([
    parseTissue(cells),
    parseTissue(tissues),
  ]);

  const availableLines = {
    cells: cellData.types,
    tissues: tissueData.types,
  };
  const merged = mergeTissues(cellData.expression, tissueData.expression);

  return {
    rnaExpression: merged,
    rnaTissues: availableLines,
  };
};

module.exports = parseData;
