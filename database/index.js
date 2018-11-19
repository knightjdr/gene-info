/* eslint no-console: 0 */

const uniprot = require('./uniprot/uniprot');

uniprot()
  .catch((err) => {
    console.log(err);
  });
