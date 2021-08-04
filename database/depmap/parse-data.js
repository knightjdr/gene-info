const fs = require('fs');
const readline = require('readline');

const arrSort = require('../helpers/arr-sort');
const parseCSVLine = require('../helpers/parse-csv-line');
const round = require('../helpers/round');
const { mean, median, std } = require('../helpers/stats');

const addStats = (effectByGeneIDAndCell) => {
  const effectByGeneIDAndCellWithStats = {};
  Object.entries(effectByGeneIDAndCell).forEach(([gene, cellData]) => {
    const effects = Object.values(cellData);
    effectByGeneIDAndCellWithStats[gene] = {
      cells: cellData,
      stats: {
        mean: round(mean(effects), 4),
        median: round(median(effects), 4),
        std: round(std(effects), 4),
      },
    };
  });
  return effectByGeneIDAndCellWithStats;
};

const parseCellInfo = file => (
  new Promise((resolve, reject) => {
    if (fs.existsSync(file)) {
      const cells = {};

      let header = true;
      const lineReader = readline.createInterface({
        input: fs.createReadStream(file),
      });
      lineReader.on('line', (line) => {
        if (!header) {
          const [id, , cell] = parseCSVLine(line)[0];
          cells[id] = cell;
        }
        header = false;
      });
      lineReader.on('close', () => {
        resolve(cells);
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    } else {
      resolve({});
    }
  })
);

const parseDepmapData = file => (
  new Promise((resolve, reject) => {
    if (fs.existsSync(file)) {
      const dataByCellLineAndGeneID = {};
      const genes = [];
      const geneIdRe = new RegExp(/\(([^)]+)\)/);

      let header = true;
      const lineReader = readline.createInterface({
        input: fs.createReadStream(file),
      });
      lineReader.on('line', (line) => {
        if (!header) {
          const [id, ...values] = line.split(',');
          dataByCellLineAndGeneID[id] = {};
          values.forEach((value, index) => {
            dataByCellLineAndGeneID[id][genes[index]] = round(Number(value), 4);
          });
        }
        if (header) {
          const genesHeadings = line.split(',').slice(1);
          genesHeadings.forEach((geneHeading) => {
            const geneID = Number(geneHeading.match(geneIdRe)[1]);
            genes.push(geneID);
          });
          header = false;
        }
      });
      lineReader.on('close', () => {
        resolve(dataByCellLineAndGeneID);
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    } else {
      resolve({});
    }
  })
);

const summarizeByGeneID = (dataByCellLineAndGeneID, cellMappingData) => {
  if (Object.keys(dataByCellLineAndGeneID).length > 0) {
    const cellLines = Object.keys(dataByCellLineAndGeneID);
    const effectByGeneIDAndCell = Object.keys(dataByCellLineAndGeneID[cellLines[0]]).reduce((accum, geneID) => ({
      ...accum,
      [geneID]: {},
    }), {});

    const cellsAvailable = [];
    Object.entries(dataByCellLineAndGeneID).forEach(([cellID, genesWithCellEffect]) => {
      const cellName = cellMappingData[cellID] ?? cellID;
      Object.entries(genesWithCellEffect).forEach(([geneID, cellEffect]) => {
        effectByGeneIDAndCell[geneID][cellName] = cellEffect;
      });
      cellsAvailable.push(cellName);
    });

    return [effectByGeneIDAndCell, arrSort.alphabetical(cellsAvailable)];
  }
  return [{}, []];
};

const parseData = async (depmapData, cellInfo) => {
  const [data, cells] = await Promise.all([
    parseDepmapData(depmapData),
    parseCellInfo(cellInfo),
  ]);

  const [effectByGeneIDAndCell, cellsAvailable] = summarizeByGeneID(data, cells);

  return {
    depmapTissues: {
      cells: cellsAvailable,
    },
    effects: addStats(effectByGeneIDAndCell),
  };
};

module.exports = {
  addStats,
  parseCellInfo,
  parseData,
  parseDepmapData,
};
