const createFolder = require('../helpers/create-folder');
const config = require('../config');
const downloadFtp = require('../helpers/download-ftp');
const downloadHttps = require('../helpers/download-https');
const minBiogridTab = require('./min-biogrid-tab');
const minIntactTab = require('./min-intact-tab');
const unzipFile = require('../helpers/unzip-file');

const fsConfig = {
  biogrid: {
    file: './files/interactions/biogrid.tab',
    url: 'https://downloads.thebiogrid.org/Download/BioGRID/Latest-Release/BIOGRID-ALL-LATEST.tab2.zip',
    zipFile: './files/interactions/biogrid.zip',
  },
  folder: 'files/interactions',
  intact: {
    file: './files/interactions/intact.tab',
    host: 'ftp.ebi.ac.uk',
    hostFile: '/pub/databases/intact/current/psimitab/intact.zip',
    zipFile: './files/interactions/intact.zip',
  },
};

/* Download and unzip interactions database from BioGrid and Intact. */
const interactions = options => (
  new Promise((resolve, reject) => {
    createFolder(fsConfig.folder)
      .then(() => Promise.all([
        downloadHttps(fsConfig.biogrid.url, fsConfig.biogrid.zipFile, options.skipDownload),
        downloadFtp(
          fsConfig.intact.host,
          fsConfig.intact.hostFile,
          fsConfig.intact.zipFile,
          options.skipDownload,
        ),
      ]))
      .then(() => Promise.all([
        unzipFile('unzip', fsConfig.biogrid.zipFile, fsConfig.biogrid.file, options.skipUnzip),
        unzipFile('unzip', fsConfig.intact.zipFile, fsConfig.intact.file, options.skipUnzip),
      ]))
      .then(() => minBiogridTab(
        fsConfig.biogrid.file,
        './files/interactions',
        config.speciesID,
        options.skipMin,
      ))
      .then(() => minIntactTab(
        fsConfig.intact.file,
        './files/interactions',
        config.speciesID,
        options.skipMin,
      ))
      .then(() => { resolve(); })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = interactions;
