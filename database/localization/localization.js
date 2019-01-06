/* eslint max-len: 0 */

const createFolder = require('../helpers/create-folder');
const downloadHttp = require('../helpers/download-http');
const downloadHttps = require('../helpers/download-https');
const unzipFile = require('../helpers/unzip-file');

const fsConfig = {
  hpa: {
    file: './files/localization/hpa/Homo sapiens.tsv',
    url: 'https://www.proteinatlas.org/download/subcellular_location.tsv.zip',
    zipFile: './files/localization/hpa.zip',
  },
  hpaFolder: './files/localization/hpa',
  compartments: [
    {
      url: 'http://download.jensenlab.org/human_compartment_knowledge_full.tsv',
      file: './files/localization/compartments/Homo sapiens.tsv',
    },
    {
      url: 'http://download.jensenlab.org/mouse_compartment_knowledge_full.tsv',
      file: './files/localization/compartments/Mus musculus.tsv',
    },
    {
      url: 'http://download.jensenlab.org/fly_compartment_knowledge_full.tsv',
      file: './files/localization/compartments/Drosophila melanogaster.tsv',
    },
    {
      url: 'http://download.jensenlab.org/worm_compartment_knowledge_full.tsv',
      file: './files/localization/compartments/Caenorhabditis elegans.tsv',
    },
    {
      url: 'http://download.jensenlab.org/yeast_compartment_knowledge_full.tsv',
      file: './files/localization/compartments/Saccharomyces cerevisiae.tsv',
    },
    {
      url: 'http://download.jensenlab.org/arabidopsis_compartment_knowledge_full.tsv',
      file: './files/localization/compartments/Arabidopsis thaliana.tsv',
    },
  ],
  compartmentsFolder: './files/localization/compartments',
};

/* Download and unzip localization database from HPA and compartments. */
const localization = options => (
  new Promise((resolve, reject) => {
    Promise.all([
      createFolder(fsConfig.compartmentsFolder),
      createFolder(fsConfig.hpaFolder),
    ])
      .then(() => Promise.all([
        downloadHttps(fsConfig.hpa.url, fsConfig.hpa.zipFile, options.skipDownload),
        downloadHttp(fsConfig.compartments[0].url, fsConfig.compartments[0].file, options.skipDownload),
        downloadHttp(fsConfig.compartments[1].url, fsConfig.compartments[1].file, options.skipDownload),
        downloadHttp(fsConfig.compartments[2].url, fsConfig.compartments[2].file, options.skipDownload),
        downloadHttp(fsConfig.compartments[3].url, fsConfig.compartments[3].file, options.skipDownload),
        downloadHttp(fsConfig.compartments[4].url, fsConfig.compartments[4].file, options.skipDownload),
        downloadHttp(fsConfig.compartments[5].url, fsConfig.compartments[5].file, options.skipDownload),
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
