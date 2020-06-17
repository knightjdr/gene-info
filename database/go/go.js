const createFolder = require('../helpers/create-folder');
const downloadHttp = require('../helpers/download-http');

const fsConfig = {
  goFolder: './files/go',
  obo: {
    dest: './files/go/go-basic.obo',
    url: 'http://snapshot.geneontology.org/ontology/go-basic.obo',
  },
};

/* Download and unzip go annotations. */
const getGoHierarchy = options => (
  new Promise((resolve, reject) => {
    createFolder(fsConfig.goFolder)
      .then(() => Promise.all([
        downloadHttp(fsConfig.obo.url, fsConfig.obo.dest, options.skipDownload),
      ]))
      .then(() => { resolve(); })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = getGoHierarchy;
