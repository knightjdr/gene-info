/* eslint no-console: 0 */

const fs = require('fs');
const readline = require('readline');

const arrSort = require('../helpers/arr-sort');

const handleLines = file => (
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
      console.error(`Missing HPA RNA expression file: ${file}`);
      resolve({
        expression: {},
        types: [],
      });
    }
  })
);

const mergeExpression = (cells, tissues) => {
  const keys = [...new Set([...Object.keys(cells), ...Object.keys(tissues)])];
  const merged = {};
  keys.forEach((key) => {
    merged[key] = {
      cells: cells[key] || {},
      tissues: tissues[key] || {},
    };
  });
  return merged;
};

const expressionParse = (cells, tissues) => (
  new Promise((resolve, reject) => {
    Promise.all([
      handleLines(cells),
      handleLines(tissues),
    ])
      .then((values) => {
        const [cellData, tissueData] = values;
        const lines = {
          cells: cellData.types,
          tissues: tissueData.types,
        };
        const merged = mergeExpression(cellData.expression, tissueData.expression);
        resolve({
          rnaExpression: merged,
          rnaTissues: lines,
        });
      })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = expressionParse;
