const createFolder = require('../helpers/create-folder');
const readJson = require('../helpers/read-json');
const { getRegions } = require('./get-regions');

/* Regions have to be retrieved from Pfam using their api as they
** do not have a download on their FTP site */
const regions = options => (
  new Promise((resolve, reject) => {
    if (options.skipDownload) {
      resolve();
    } else {
      createFolder('./files/regions')
        .then(() => readJson('./files/uniprot/uniprot-ids.json'))
        .then(uniprot => getRegions('./files/regions', uniprot))
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    }
  })
);

module.exports = regions;
