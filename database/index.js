/* eslint no-console: 0 */

const args = require('./args');
const uniprot = require('./uniprot/uniprot');

const options = args();

uniprot(options)
  .catch((err) => {
    console.log(err);
  });
