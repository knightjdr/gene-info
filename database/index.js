/* eslint no-console: 0 */

const args = require('./args');
const domains = require('./domains/domains');
const geneNames = require('./gene-names/gene-names');
const generateDB = require('./generate-db');
const getProteinExpressionData = require('./expression/protein/get-data');
const getRNAExpressionData = require('./expression/rna/get-data');
const getGoHierarchy = require('./go/go');
const interactions = require('./interactions/interactions');
const localization = require('./localization/localization');
const regions = require('./regions/regions');

const uniprot = require('./uniprot/uniprot');
const writeTissues = require('./write-tissues');

const options = args();

/* Retrieve and perform initial processing of database files, including
** unzip and splitting to species files as needed. DB files are split to
** individual species files as they are generally too large to read into
** memory otherwise. Pfam retrieval and processing is done after Uniprot
** as splitting domains to individual files requires a list of Uniprot IDs to
** keep. */

const main = async () => {
  try {
    console.log('Fetching gene data (1/10)');
    await geneNames(options);
    console.log('Fetching GO files (2/10)');
    await getGoHierarchy(options);
    console.log('Fetching protein expression data (3/10)');
    await getProteinExpressionData(options);
    console.log('Fetching RNA expression data (4/10)');
    await getRNAExpressionData(options);
    console.log('Fetching interactions (5/10)');
    await interactions(options);
    console.log('Fetching localizations (6/10)');
    await localization(options);
    console.log('Fetching UniProt database (7/10)');
    await uniprot(options);
    console.log('Fetching Pfam domains (8/10)');
    await domains(options);
    console.log('Fetching Pfam regions (9/10)');
    await regions(options);

    console.log('Generating database (10/10)');
    const { protein, rna } = await generateDB();
    await writeTissues(rna, './files/rna-tissues.js');
    await writeTissues(protein, './files/protein-tissues.js');
  } catch (err) {
    console.error(err);
  }
};

main();
