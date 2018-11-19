const fs = require('fs').promises;

const convertXml = require('../helpers/convert-xml');
const downloadFile = require('../helpers/download-ftp');
const gunzipFile = require('../helpers/gunzip-file');
const uniprotParse = require('./uniprot-parse');

const config = {
  file: './files/short.xml',
  host: 'ftp.uniprot.org',
  hostFile: '/pub/databases/uniprot/current_release/knowledgebase/complete/uniprot_sprot.xml.gz',
  zipFile: './files/uniprot.xml.gz',
};

const uniprot = () => (
  new Promise((resolve, reject) => {
    fs.readFile(config.file, 'utf8')
      .then(xmlData => convertXml(xmlData))
      .then(js => uniprotParse(js))
      .then((data) => { resolve(data); })
      .catch((err) => {
        reject(err);
      });
    /* downloadFile(config.host, config.hostFile, config.zipFile)
      .then(() => gunzipFile(config.zipFile, config.file))
      .then(() => fs.readFile(config.file, 'utf8'))
      .then(xmlData => convertXml(xmlData))
      .then(js => uniprotParse(js))
      .then((data) => { resolve(data); })
      .catch((err) => {
        reject(err);
      }); */
  })
);

module.exports = uniprot;
