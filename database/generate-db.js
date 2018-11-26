const config = require('./config');
const intParse = require('./interactions/iterate-tab');
const uniParse = require('./uniprot/iterate-xml');

const speciesDB = specie => (
  new Promise((resolve, reject) => {
    Promise.all([
      uniParse(`./files/uniprot/${specie}.xml`),
      intParse(`./files/interactions/${specie}.tab`),
    ])
      .then((values) => {
        const [db, interactions] = values;
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
