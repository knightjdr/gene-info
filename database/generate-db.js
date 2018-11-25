const config = require('./config');
const uniParse = require('./uniprot/iterate-xml');

const generateDB = () => (
  new Promise((resolve) => {
    const iterator = async (species) => {
      await Promise.all(species.map(async (specie) => {
        const db = await uniParse(`./files/uniprot/${specie}.xml`);
      }));
      resolve();
    };

    iterator(config.species);
  })
);

module.exports = generateDB;
