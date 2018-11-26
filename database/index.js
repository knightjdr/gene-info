/* eslint no-console: 0 */

const args = require('./args');
const generateDB = require('./generate-db');
const interactions = require('./interactions/interactions');
const uniprot = require('./uniprot/uniprot');

const options = args();

Promise.all([
  interactions(options),
  uniprot(options),
])
  .then(() => generateDB())
  .then(() => {
    console.log('complete');
  })
  .catch((err) => {
    console.log(err);
  });
