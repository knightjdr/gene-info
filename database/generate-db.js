const config = require('./config');
const createFolder = require('./helpers/create-folder');
const domainParse = require('./domains/domain-parse');
const intParse = require('./interactions/iterate-tab');
const jsonStringify = require('./helpers/json-stringify');
const mergeDB = require('./merge-db');
const parseProteinExpression = require('./expression/protein/parse-data').parseData;
const parseRNAExpression = require('./expression/rna/parse-data').parseData;
const regionParse = require('./regions/region-parse');
const uniParse = require('./uniprot/iterate-xml');
const { geneNameParse } = require('./gene-names/gene-name-parse');
const { localizationParse } = require('./localization/localization-parse');
const { parseData: depmapParse } = require('./depmap/parse-data');
const { readObo } = require('./go/read-obo');

const speciesDB = async (specie, obo) => {
  const parsedData = await Promise.all([
    parseProteinExpression(
      `./files/protein-expression/cells/${specie}.json`,
      `./files/protein-expression/tissues/${specie}.json`,
    ),
    parseRNAExpression(
      `./files/rna-expression/cells/${specie}.tsv`,
      `./files/rna-expression/tissues/${specie}.tsv`,
    ),
    depmapParse(`./files/depmap/${specie}.csv`, `./files/depmap/${specie}-cell-info.csv`),
    uniParse(`./files/uniprot/${specie}.xml`),
    domainParse(`./files/domains/${specie}.tsv`, './files/domains/domain-names.tsv'),
    geneNameParse(`./files/gene-names/${specie}.json`, specie),
    intParse(`./files/interactions/${specie}.tab`),
    localizationParse(
      `./files/localization/hpa/${specie}.tsv`,
      `./files/localization/compartments/${specie}.tsv`,
      `./files/go/${specie}.tsv`,
      obo,
    ),
    regionParse(`./files/regions/${specie}.tsv`),
  ]);

  const merged = mergeDB(parsedData);
  await jsonStringify(`./files/databases/${specie}.json`, merged);

  const [{ proteinTissues }, { rnaTissues }, { depmapTissues }] = parsedData;
  return {
    depmap: depmapTissues,
    protein: proteinTissues,
    rna: rnaTissues,
  };
};

const generateDB = async () => {
  await createFolder('./files/databases');
  const obo = await readObo('./files/go/go-basic.obo');
  const { speciesID } = config;
  const species = Object.values(speciesID);

  const tissues = {
    depmap: {},
    protein: {},
    rna: {},
  };

  const iterator = async () => {
    await Promise.all(species.map(async (specie) => {
      const { depmap, protein, rna } = await speciesDB(specie, obo);
      tissues.depmap[specie] = depmap;
      tissues.protein[specie] = protein;
      tissues.rna[specie] = rna;
    }));
  };

  await iterator();

  return {
    depmap: tissues.depmap,
    protein: tissues.protein,
    rna: tissues.rna,
  };
};

module.exports = generateDB;
