/* eslint no-console: 0 */

const args = require('./args');
const generateDB = require('./generate-db');
const uniprot = require('./uniprot/uniprot');

const options = args();

uniprot(options)
  .then(() => generateDB())
  .then(() => {
    console.log('complete');
  })
  .catch((err) => {
    console.log(err);
  });
