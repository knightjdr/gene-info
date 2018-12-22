const createFolder = require('../helpers/create-folder');
const downloadHttps = require('../helpers/download-https');
const unzipFile = require('../helpers/unzip-file');

const fsConfig = {
  cell: {
    file: './files/rna-expression/cells/Homo sapiens.tsv',
    url: 'https://www.proteinatlas.org/download/rna_celline.tsv.zip',
    zipFile: './files/rna-expression/cells.zip',
  },
  cellFolder: './files/rna-expression/cells',
  tissue: {
    file: './files/rna-expression/tissues/Homo sapiens.tsv',
    url: 'https://www.proteinatlas.org/download/rna_tissue.tsv.zip',
    zipFile: './files/rna-expression/tissues.zip',
  },
  tissuesFolder: './files/rna-expression/tissues',
};

/* Download and unzip expression database from HPA */
const rnaExpression = options => (
  new Promise((resolve, reject) => {
    Promise.all([
      createFolder(fsConfig.cellFolder),
      createFolder(fsConfig.tissuesFolder),
    ])
      .then(() => Promise.all([
        downloadHttps(fsConfig.cell.url, fsConfig.cell.zipFile, options.skipDownload),
        downloadHttps(fsConfig.tissue.url, fsConfig.tissue.zipFile, options.skipDownload),
      ]))
      .then(() => Promise.all([
        unzipFile(
          'unzip',
          fsConfig.cell.zipFile,
          fsConfig.cell.file,
          options.skipUnzip,
        ),
        unzipFile(
          'unzip',
          fsConfig.tissue.zipFile,
          fsConfig.tissue.file,
          options.skipUnzip,
        ),
      ]))
      .then(() => { resolve(); })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = rnaExpression;
