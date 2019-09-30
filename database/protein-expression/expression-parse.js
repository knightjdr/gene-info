const fs = require('fs');

const arrSort = require('../helpers/arr-sort');
const readJSON = require('../helpers/read-json');
const round = require('../helpers/round');

const parseTissue = async (file) => {
  const expression = {};
  const types = {};

  if (fs.existsSync(file)) {
    const tissueData = await readJSON(file);
    const samples = tissueData.d.results;

    samples.forEach((sample) => {
      const {
        EXPRESSION_LEVEL,
        NORMALIZED_INTENSITY,
        TISSUE_NAME,
        UNIPROT_ACCESSION,
      } = sample;

      const accession = UNIPROT_ACCESSION;
      const cell = TISSUE_NAME.replace(/ cell$/, '');
      const expressionLevel = EXPRESSION_LEVEL.toLowerCase();
      const value = round(NORMALIZED_INTENSITY, 3);

      if (!types[cell]) {
        types[cell] = true;
      }

      if (!expression[accession]) {
        expression[accession] = {};
      }
      expression[accession][cell] = {
        intensity: value,
        level: expressionLevel,
      };
    });
  }

  return {
    expression,
    types: arrSort.alphabetical(Object.keys(types)),
  };
};

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

const expressionParse = async (cells, tissues) => {
  const [cellData, tissueData] = await Promise.all([
    parseTissue(cells),
    parseTissue(tissues),
  ]);

  const lines = {
    cells: cellData.types,
    tissues: tissueData.types,
  };
  const merged = mergeExpression(cellData.expression, tissueData.expression);

  return {
    proteinExpression: merged,
    proteinTissues: lines,
  };
};

module.exports = expressionParse;
