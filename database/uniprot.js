const downloadFile = require('./helpers/download-ftp');
const gunzipFile = require('./helpers/gunzip-file');

const config = {
  file: './input-files/uniprot.dat',
  host: 'ftp.uniprot.org',
  hostFile: '/pub/databases/uniprot/current_release/knowledgebase/complete/uniprot_sprot.dat.gz',
  zipFile: './input-files/uniprot.dat.gz',
};

const uniprot = () => (
  new Promise((resolve, reject) => {
    downloadFile(config.host, config.hostFile, config.zipfle)
      .then(() => gunzipFile(config.zipFile, config.File))
      .then(() => resolve())
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = uniprot;
