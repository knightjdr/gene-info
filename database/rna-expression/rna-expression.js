const createFolder = require('../helpers/create-folder');
const downloadHttp = require('../helpers/download-http');
const unzipFile = require('../helpers/unzip-file');

const fsConfig = {
  cell: {
    file: './files/rna-expression/cells.tsv',
    url: 'https://www.proteinatlas.org/download/rna_celline.tsv.zip',
    zipFile: './files/rna-expression/cells.zip',
  },
  folder: './files/rna-expression',
  tissue: {
    file: './files/rna-expression/tissues.tsv',
    url: 'https://www.proteinatlas.org/download/rna_tissue.tsv.zip',
    zipFile: './files/rna-expression/tissues.zip',
  },
};

/* Download and unzip interactions database from BioGrid and Intact. */
const rnaExpression = options => (
  new Promise((resolve, reject) => {
    createFolder(fsConfig.folder)
      .then(() => Promise.all([
        downloadHttp(fsConfig.cell.url, fsConfig.cell.zipFile, options.skipDownload),
        downloadHttp(fsConfig.tissue.url, fsConfig.tissue.zipFile, options.skipDownload),
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
