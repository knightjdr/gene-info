const fs = require('fs');

const arrSort = require('../../helpers/arr-sort');
const mergeTissues = require('../merge-tissues');
const readJSON = require('../../helpers/read-json');
const round = require('../../helpers/round');

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
    lines: arrSort.alphabetical(Object.keys(types)),
  };
};

const parseData = async (cells, tissues) => {
  const [cellData, tissueData] = await Promise.all([
    parseTissue(cells),
    parseTissue(tissues),
  ]);

  const availableLines = {
    cells: cellData.lines,
    tissues: tissueData.lines,
  };
  const merged = mergeTissues(cellData.expression, tissueData.expression);

  return {
    proteinExpression: merged,
    proteinTissues: availableLines,
  };
};

module.exports = {
  parseData,
  parseTissue,
};
