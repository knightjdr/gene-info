const config = require('./config');
const createFolder = require('./helpers/create-folder');
const domainParse = require('./domains/domain-parse');
const expressionParse = require('./rna-expression/expression-parse');
const intParse = require('./interactions/iterate-tab');
const mergeDB = require('./merge-db');
const regionParse = require('./regions/region-parse');
const jsonStringify = require('./helpers/json-stringify');
const uniParse = require('./uniprot/iterate-xml');
const { geneNameParse } = require('./gene-names/gene-name-parse');
const { localizationParse } = require('./localization/localization-parse');
const { readObo } = require('./go/read-obo');

const speciesDB = (specie, obo) => (
  new Promise((resolve, reject) => {
    let rnaTissues;
    Promise.all([
      uniParse(`./files/uniprot/${specie}.xml`),
      expressionParse(
        `./files/rna-expression/cells/${specie}.tsv`,
        `./files/rna-expression/tissues/${specie}.tsv`,
      ),
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
    ])
      .then((values) => {
        [, { rnaTissues }] = values;
        const merged = mergeDB(values);
        return jsonStringify(`./files/databases/${specie}.json`, merged);
      })
      .then(() => {
        resolve(rnaTissues);
      })
      .catch((err) => {
        reject(err);
      });
  })
);

const generateDB = async () => {
  try {
    await createFolder('./files/databases');
    const obo = await readObo('./files/go/go-basic.obo');

    const rnaTissues = {};
    const iterator = async (species) => {
      await Promise.all(species.map(async (specie) => {
        rnaTissues[specie] = await speciesDB(specie, obo);
      }));
    };
    await iterator(config.species);
    return rnaTissues;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = generateDB;
