const config = require('../config');
const downloadFtp = require('../helpers/download-ftp');
const unzipFile = require('../helpers/unzip-file');
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
    downloadFtp(fsConfig.host, fsConfig.hostFile, fsConfig.zipFile, options.skipDownload)
      .then(() => unzipFile('gunzip', fsConfig.zipFile, fsConfig.file, options.skipUnzip))
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
