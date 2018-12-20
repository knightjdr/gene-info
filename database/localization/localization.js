const createFolder = require('../helpers/create-folder');
const downloadHttp = require('../helpers/download-http');
const unzipFile = require('../helpers/unzip-file');

const fsConfig = {
  hpa: {
    file: './files/localization/hpa/Homo sapiens.tsv',
    url: 'https://www.proteinatlas.org/download/subcellular_location.tsv.zip',
    zipFile: './files/localization/hpa.zip',
  },
  hpaFolder: './files/localization/hpa',
};

/* Download and unzip localization database from HPA and compartments. */
const localization = options => (
  new Promise((resolve, reject) => {
    Promise.all([
      createFolder(fsConfig.hpaFolder),
    ])
      .then(() => Promise.all([
        downloadHttp(fsConfig.hpa.url, fsConfig.hpa.zipFile, options.skipDownload),
      ]))
      .then(() => Promise.all([
        unzipFile(
          'unzip',
          fsConfig.hpa.zipFile,
          fsConfig.hpa.file,
          options.skipUnzip,
        ),
      ]))
      .then(() => { resolve(); })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = localization;
