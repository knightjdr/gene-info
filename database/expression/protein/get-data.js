const config = require('../../config');
const createFolder = require('../../helpers/create-folder');
const fetchStream = require('../../helpers/fetch-stream');

const createURL = (tissueCategory, specie) => `https://www.proteomicsdb.org/proteomicsdb/logic/api/proteinexpressionacrosstissues.xsodata/InputParams(QUANTIFICATION_METHOD="MS1",TISSUE_ID_SELECTION="",TISSUE_CATEGORY_SELECTION="${tissueCategory}",SCOPE_SELECTION=1,AGGREGATE=1,SEPARATOR=",",CALCULATION_METHOD="iBAQ",ONLY_SP=1,NO_ISOFORM=1,TISSUE_ORDER=0,PROTEIN_ORDER=0,TAXCODE=${specie},OMICS="Proteomics")/Results?$select=UNIPROT_ACCESSION,EXPRESSION_LEVEL,TISSUE_NAME,NORMALIZED_INTENSITY&$format=json`;

const createFolders = async () => {
  await Promise.all([
    createFolder('./files/protein-expression/cells'),
    createFolder('./files/protein-expression/tissues'),
  ]);
};

const setupDownloads = async (speciesIDs) => {
  await speciesIDs.reduce(async (previousPromise, speciesID) => {
    await previousPromise;

    const speciesName = config.speciesID[speciesID];
    await Promise.all([
      fetchStream(
        createURL('cell+line', speciesID),
        `./files/protein-expression/cells/${speciesName}.json`,
      ),
      fetchStream(
        createURL('tissue', speciesID),
        `./files/protein-expression/tissue/${speciesName}.json`,
      ),
    ]);
  }, Promise.resolve());
};

const getData = async (options) => {
  if (!options.skipDownload) {
    await createFolders();
    await setupDownloads(config.proteomicsDBSpecies);
  }
};

module.exports = getData;
