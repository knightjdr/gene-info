/* eslint no-console: 0 */

const args = require('./args');
const domains = require('./domains/domains');
const generateDB = require('./generate-db');
const interactions = require('./interactions/interactions');
const rnaExpression = require('./rna-expression/rna-expression.js');
const uniprot = require('./uniprot/uniprot');
const writeTissues = require('./write-tissues');

const options = args();

/* Retrieve and perform initial processing of database files, including
** unzip and splitting to species files as needed. DB files are split to
** individual species files as they are generally too large to read into
** memort otherwise. Pfam retrieval and processing is done after Uniprot
** as splitting domains to individual files requires a list of Uniprot IDs to
** keep. */
Promise.all([
  interactions(options),
  rnaExpression(options),
  uniprot(options),
])
  .then(() => Promise.all([
    domains(options),
  ]))
  .then(() => generateDB())
  .then(rnaTissues => writeTissues(rnaTissues, './files/rna-tissues.js'))
  .then(() => {
    console.log('complete');
  })
  .catch((err) => {
    console.log(err);
  });
