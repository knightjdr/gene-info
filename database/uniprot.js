const downloadFile = require('./helpers/download-ftp');
const gunzipFile = require('./helpers/gunzip-file');

const config = {
  file: './input-files/uniprot.xml',
  host: 'ftp.uniprot.org',
  hostFile: '/pub/databases/uniprot/current_release/knowledgebase/complete/uniprot_sprot.xml.gz',
  zipFile: './input-files/uniprot.xml.gz',
};

const uniprot = () => (
  new Promise((resolve, reject) => {
    downloadFile(config.host, config.hostFile, config.zipFile)
      .then(() => gunzipFile(config.zipFile, config.File))
      .then(() => resolve())
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = uniprot;
