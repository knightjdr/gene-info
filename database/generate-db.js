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

  const [{ proteinTissues }, { rnaTissues }] = parsedData;
  return {
    protein: proteinTissues,
    rna: rnaTissues,
  };
};

const generateDB = async () => {
  await createFolder('./files/databases');
  const obo = await readObo('./files/go/go-basic.obo');
  const { species } = config;

  const tissues = {
    protein: {},
    rna: {},
  };

  const iterator = async () => {
    await Promise.all(species.map(async (specie) => {
      const { protein, rna } = await speciesDB(specie, obo);
      tissues.protein[specie] = protein;
      tissues.rna[specie] = rna;
    }));
  };

  await iterator();

  return {
    protein: tissues.protein,
    rna: tissues.rna,
  };
};

module.exports = generateDB;
