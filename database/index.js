/* eslint no-console: 0 */

const args = require('./args');
const domains = require('./domains/domains');
const geneNames = require('./gene-names/gene-names');
const generateDB = require('./generate-db');
const go = require('./go/go');
const interactions = require('./interactions/interactions');
const localization = require('./localization/localization');
const regions = require('./regions/regions');
const rnaExpression = require('./rna-expression/rna-expression.js');
const proteinExpression = require('./protein-expression/protein-expression');
const uniprot = require('./uniprot/uniprot');
const writeTissues = require('./write-tissues');

const options = args();

/* Retrieve and perform initial processing of database files, including
** unzip and splitting to species files as needed. DB files are split to
** individual species files as they are generally too large to read into
** memort otherwise. Pfam retrieval and processing is done after Uniprot
** as splitting domains to individual files requires a list of Uniprot IDs to
** keep. */

const main = async () => {
  try {
    await Promise.all([
      geneNames(options),
      go(options),
      interactions(options),
      localization(options),
      proteinExpression(options),
      rnaExpression(options),
      uniprot(options),
    ]);

    await Promise.all([
      domains(options),
      regions(options),
    ]);

    const { protein, rna } = await generateDB();
    await writeTissues(rna, './files/rna-tissues.js');
    await writeTissues(protein, './files/protein-tissues.js');

    console.log('complete');
  } catch (err) {
    console.error(err);
  }
};

main();
