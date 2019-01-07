/* eslint max-len: 0 */

const createFolder = require('../helpers/create-folder');
const downloadHttp = require('../helpers/download-http');
const unzipFile = require('../helpers/unzip-file');

const fsConfig = {
  annotations: [
    {
      file: './files/go/Arabidopsis thaliana.tsv',
      url: 'http://geneontology.org/gene-associations/gene_association.tair.gz',
      zipFile: './files/go/Arabidopsis thaliana.gz',
    },
    {
      file: './files/go/Caenorhabditis elegans.tsv',
      url: 'http://geneontology.org/gene-associations/gene_association.wb.gz',
      zipFile: './files/go/Caenorhabditis elegans.gz',
    },
    {
      file: './files/go/Danio rerio.tsv',
      url: 'http://geneontology.org/gene-associations/gene_association.zfin.gz',
      zipFile: './files/go/Danio rerio.gz',
    },
    {
      file: './files/go/Dictyostelium discoideum.tsv',
      url: 'http://geneontology.org/gene-associations/gene_association.dictyBase.gz',
      zipFile: './files/go/Dictyostelium discoideum.gz',
    },
    {
      file: './files/go/Drosophila melanogaster.tsv',
      url: 'http://geneontology.org/gene-associations/gene_association.fb.gz',
      zipFile: './files/go/Drosophila melanogaster.gz',
    },
    {
      file: './files/go/Gallus gallus.tsv',
      url: 'http://geneontology.org/gene-associations/goa_chicken.gaf.gz',
      zipFile: './files/go/Gallus gallus.gz',
    },
    {
      file: './files/go/Homo sapiens.tsv',
      url: 'http://geneontology.org/gene-associations/goa_human.gaf.gz',
      zipFile: './files/go/Homo sapiens.gz',
    },
    {
      file: './files/go/Mus musculus.tsv',
      url: 'http://geneontology.org/gene-associations/gene_association.mgi.gz',
      zipFile: './files/go/Mus musculus.gz',
    },
    {
      file: './files/go/Saccharomyces cerevisiae.tsv',
      url: 'http://geneontology.org/gene-associations/gene_association.sgd.gz',
      zipFile: './files/go/Saccharomyces cerevisiae.gz',
    },
  ],
  goFolder: './files/go',
  obo: {
    url: 'http://snapshot.geneontology.org/ontology/go-basic.obo',
    zipFile: './files/go/go-basic.obo',
  },
};

/* Download and unzip go annotations. */
const go = options => (
  new Promise((resolve, reject) => {
    createFolder(fsConfig.goFolder)
      .then(() => Promise.all([
        downloadHttp(fsConfig.obo.url, fsConfig.obo.zipFile, options.skipDownload),
        downloadHttp(fsConfig.annotations[0].url, fsConfig.annotations[0].zipFile, options.skipDownload),
        downloadHttp(fsConfig.annotations[1].url, fsConfig.annotations[1].zipFile, options.skipDownload),
        downloadHttp(fsConfig.annotations[2].url, fsConfig.annotations[2].zipFile, options.skipDownload),
        downloadHttp(fsConfig.annotations[3].url, fsConfig.annotations[3].zipFile, options.skipDownload),
        downloadHttp(fsConfig.annotations[4].url, fsConfig.annotations[4].zipFile, options.skipDownload),
        downloadHttp(fsConfig.annotations[5].url, fsConfig.annotations[5].zipFile, options.skipDownload),
        downloadHttp(fsConfig.annotations[6].url, fsConfig.annotations[6].zipFile, options.skipDownload),
        downloadHttp(fsConfig.annotations[7].url, fsConfig.annotations[7].zipFile, options.skipDownload),
        downloadHttp(fsConfig.annotations[8].url, fsConfig.annotations[8].zipFile, options.skipDownload),
      ]))
      .then(() => Promise.all([
        unzipFile('gunzip', fsConfig.annotations[0].zipFile, fsConfig.annotations[0].file, options.skipUnzip),
        unzipFile('gunzip', fsConfig.annotations[1].zipFile, fsConfig.annotations[1].file, options.skipUnzip),
        unzipFile('gunzip', fsConfig.annotations[2].zipFile, fsConfig.annotations[2].file, options.skipUnzip),
        unzipFile('gunzip', fsConfig.annotations[3].zipFile, fsConfig.annotations[3].file, options.skipUnzip),
        unzipFile('gunzip', fsConfig.annotations[4].zipFile, fsConfig.annotations[4].file, options.skipUnzip),
        unzipFile('gunzip', fsConfig.annotations[5].zipFile, fsConfig.annotations[5].file, options.skipUnzip),
        unzipFile('gunzip', fsConfig.annotations[6].zipFile, fsConfig.annotations[6].file, options.skipUnzip),
        unzipFile('gunzip', fsConfig.annotations[7].zipFile, fsConfig.annotations[7].file, options.skipUnzip),
        unzipFile('gunzip', fsConfig.annotations[8].zipFile, fsConfig.annotations[8].file, options.skipUnzip),
      ]))
      .then(() => { resolve(); })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = go;
