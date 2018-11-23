const downloadFtp = require('../helpers/download-ftp');
const downloadHttp = require('../helpers/download-http');
const unzipFile = require('../helpers/unzip-file');

const fsConfig = {
  biogrid: {
    file: './files/biogrid.tab',
    url: 'https://downloads.thebiogrid.org/Download/BioGRID/Latest-Release/BIOGRID-ALL-LATEST.tab2.zip',
    zipFile: './files/biogrid.zip',
  },
  intact: {
    file: './files/intact.tab',
    host: 'ftp.ebi.ac.uk',
    hostFile: '/pub/databases/intact/current/psimitab/intact.zip',
    zipFile: './files/intact.zip',
  },
};

/* Download and unzip interactions database from BioGrid and Intact. */
const interactions = options => (
  new Promise((resolve, reject) => {
    Promise.all([
      downloadHttp(fsConfig.biogrid.url, fsConfig.biogrid.zipFile, options.skipDownload),
      downloadFtp(
        fsConfig.intact.host,
        fsConfig.intact.hostFile,
        fsConfig.intact.zipFile,
        options.skipDownload,
      ),
    ])
      .then(() => Promise.all([
        unzipFile('unzip', fsConfig.biogrid.zipFile, fsConfig.biogrid.file, options.skipUnzip),
        unzipFile('unzip', fsConfig.intact.zipFile, fsConfig.intact.file, options.skipUnzip),
      ]))
      .then(() => { resolve(); })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = interactions;
