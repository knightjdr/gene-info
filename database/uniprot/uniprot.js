const config = require('../config');
const downloadFile = require('../helpers/download-ftp');
const gunzipFile = require('../helpers/gunzip-file');
const minXml = require('./min-xml');

const fsConfig = {
  file: './files/uniprot.xml',
  host: 'ftp.uniprot.org',
  hostFile: '/pub/databases/uniprot/current_release/knowledgebase/complete/uniprot_sprot.xml.gz',
  zipFile: './files/uniprot.xml.gz',
};

/* Download and gunzip Uniprot XML database, then split the xml into
** a file for each species, removing unneed fields. */
const uniprot = options => (
  new Promise((resolve, reject) => {
    downloadFile(fsConfig.host, fsConfig.hostFile, fsConfig.zipFile, options.skipDownload)
      .then(() => gunzipFile(fsConfig.zipFile, fsConfig.file, options.skipDownload))
      .then(() => (
        minXml(
          fsConfig.file,
          './files',
          config.species,
          config.fields,
          options.skipXmlMin,
        )
      ))
      .then(() => { resolve(); })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = uniprot;
