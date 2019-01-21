const createFolder = require('../helpers/create-folder');
const readJson = require('../helpers/read-json');
const { getMotifs } = require('./get-motifs');

/* Motifs have to be retrieved from Pfam using their api as they
** do not have a download on their FTP site */
const motifs = options => (
  new Promise((resolve, reject) => {
    if (options.skipDownload) {
      resolve();
    } else {
      createFolder('./files/motifs')
        .then(() => readJson('./files/uniprot/uniprot-ids.json'))
        .then(uniprot => getMotifs('./files/motifs', uniprot))
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    }
  })
);

module.exports = motifs;
