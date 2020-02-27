/* eslint max-len: 0 */

const createFolder = require('../helpers/create-folder');
const downloadHttp = require('../helpers/download-http');
const unzipFile = require('../helpers/unzip-file');

const fsConfig = {
  goFolder: './files/go',
  obo: {
    url: 'http://snapshot.geneontology.org/ontology/go-basic.obo',
    zipFile: './files/go/go-basic.obo',
  },
};

/* Download and unzip go annotations. */
const go = options => (
  new Promise((resolve, reject) => {
    createFolder(fsConfig.goFolder)
      .then(() => Promise.all([
        downloadHttp(fsConfig.obo.url, fsConfig.obo.zipFile, options.skipDownload),
      ]))
      .then(() => { resolve(); })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = go;
