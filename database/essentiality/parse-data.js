const fs = require('fs');
const readline = require('readline');

const arrSort = require('../helpers/arr-sort');
const parseCSVLine = require('../helpers/parse-csv-line');
const round = require('../helpers/round');
const { mean, median, stddev } = require('../helpers/stats');

const CO_DEPENDENCY_LIMIT = 25;

const addStats = (effectByGeneIDAndCell) => {
  const effectByGeneIDAndCellWithStats = {};
  Object.entries(effectByGeneIDAndCell).forEach(([gene, cellData]) => {
    const effects = Object.values(cellData);
    effectByGeneIDAndCellWithStats[gene] = {
      cells: cellData,
      stats: {
        mean: round(mean(effects), 4),
        median: round(median(effects), 4),
        sd: round(stddev(effects), 4),
      },
    };
  });
  return effectByGeneIDAndCellWithStats;
};

const createIDtoSymbolMap = file => (
  new Promise((resolve, reject) => {
    if (fs.existsSync(file)) {
      const idToSymbol = {};
      const geneRe = new RegExp(/^(\S+) \(([^)]+)\)/);

      let header = true;
      const lineReader = readline.createInterface({
        input: fs.createReadStream(file),
      });
      lineReader.on('line', (line) => {
        if (header) {
          const genesHeadings = line.split(',').slice(1);
          genesHeadings.forEach((geneHeading) => {
            const matches = geneHeading.match(geneRe);
            const symbol = matches[1];
            const id = Number(matches[2]);
            idToSymbol[id] = symbol;
          });
          header = false;
          lineReader.close();
        }
      });
      lineReader.on('close', () => {
        resolve(idToSymbol);
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    } else {
      resolve({});
    }
  })
);

const mergeData = (effects, coDependencies, idToSymbol) => {
  const merged = {};
  Object.entries(effects).forEach(([gene, data]) => {
    merged[gene] = {
      ...data,
      coDependencies: coDependencies[gene] || [],
      sourceSymbol: idToSymbol[gene] || '',
    };
  });
  return merged;
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

const parseCoDependencies = file => (
  new Promise((resolve, reject) => {
    if (fs.existsSync(file)) {
      const coDependencies = {};
      const geneIdRe = new RegExp(/\(([^)]+)\)/);
      const geneSymbolRe = new RegExp(/^(\S+)/);
      let header = true;

      const lineReader = readline.createInterface({
        input: fs.createReadStream(file),
      });
      lineReader.on('line', (line) => {
        if (!header) {
          const [source, target, correlation] = line.split(',');
          if (source !== target) {
            const sourceID = Number(source.match(geneIdRe)[1]);
            const targetGene = target.match(geneSymbolRe)[1];
            if (!coDependencies[sourceID]) {
              coDependencies[sourceID] = [];
            }
            coDependencies[sourceID].push([targetGene, round(Number(correlation), 4)]);
          }
        }
        header = false;
      });
      lineReader.on('close', () => {
        Object.entries(coDependencies).forEach(([id, tuples]) => {
          tuples.sort((a, b) => b[1] - a[1]);
          coDependencies[id] = tuples.slice(0, CO_DEPENDENCY_LIMIT);
        });
        resolve(coDependencies);
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    } else {
      resolve({});
    }
  })
);

const parseEssentialityData = file => (
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

const parseData = async (essentialityFile, cellInfoFile, coDependencyFile) => {
  const [data, cells, coDependency, idToSymbolMap] = await Promise.all([
    parseEssentialityData(essentialityFile),
    parseCellInfo(cellInfoFile),
    parseCoDependencies(coDependencyFile),
    createIDtoSymbolMap(essentialityFile),
  ]);

  const [effectByGeneIDAndCell, cellsAvailable] = summarizeByGeneID(data, cells);

  let effects = addStats(effectByGeneIDAndCell);
  effects = mergeData(effects, coDependency, idToSymbolMap);

  return {
    essentialityTissues: {
      cells: cellsAvailable,
    },
    effects,
  };
};

module.exports = {
  addStats,
  createIDtoSymbolMap,
  parseCellInfo,
  parseCoDependencies,
  parseData,
  parseEssentialityData,
};
