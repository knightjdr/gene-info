/* eslint no-console: 0 */

const args = require('./args');
const domains = require('./domains/domains');
const geneNames = require('./gene-names/gene-names');
const generateDB = require('./generate-db');
const getEssentiality = require('./essentiality/get-data');
const getGoHierarchy = require('./go/go');
const getProteinExpressionData = require('./expression/protein/get-data');
const getRNAExpressionData = require('./expression/rna/get-data');
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
    console.log('Fetching gene data (1/11)');
    await geneNames(options);
    console.log('Fetching GO files (2/11)');
    await getGoHierarchy(options);
    console.log('Fetching protein expression data (3/11)');
    await getProteinExpressionData(options);
    console.log('Fetching RNA expression data (4/11)');
    await getRNAExpressionData(options);
    console.log('Fetching interactions (5/11)');
    await interactions(options);
    console.log('Fetching localizations (6/11)');
    await localization(options);
    console.log('Fetching UniProt database (7/11)');
    await uniprot(options);
    console.log('Fetching Essentiality database (8/11)');
    await getEssentiality(options);
    console.log('Fetching Pfam domains (9/11)');
    await domains(options);
    console.log('Fetching Pfam regions (10/11)');
    await regions(options);

    console.log('Generating database (11/11)');
    const { essentiality, protein, rna } = await generateDB();
    await writeTissues(essentiality, './files/essentiality-tissues.js');
    await writeTissues(rna, './files/rna-tissues.js');
    await writeTissues(protein, './files/protein-tissues.js');
    console.log('Database successfully generated');
  } catch (err) {
    console.error(err);
  }
};

main();
