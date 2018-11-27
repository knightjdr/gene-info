const { promises } = require('fs');

const config = require('./config');
const intParse = require('./interactions/iterate-tab');
const mergeDB = require('./merge-db');
const uniParse = require('./uniprot/iterate-xml');

const speciesDB = specie => (
  new Promise((resolve, reject) => {
    Promise.all([
      uniParse(`./files/uniprot/${specie}.xml`),
      intParse(`./files/interactions/${specie}.tab`),
    ])
      .then((values) => {
        const [db, interactions] = values;
        const merged = mergeDB(db, interactions);
        return promises.writeFile(`./files/${specie}.json`, JSON.stringify(merged, null, 2));
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  })
);

const generateDB = () => (
  new Promise((resolve) => {
    const iterator = async (species) => {
      await Promise.all(species.map(async (specie) => {
        await speciesDB(specie);
      }));
      resolve();
    };

    iterator(config.species);
  })
);

module.exports = generateDB;
