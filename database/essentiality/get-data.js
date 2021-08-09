const createFolder = require('../helpers/create-folder');
const downloadHttps = require('../helpers/download-https');

const fsConfig = {
  celldata: {
    file: './files/essentiality/Homo sapiens-cell-info.csv',
    url: 'https://ndownloader.figshare.com/files/27902376',
  },
  effectsData: {
    file: './files/essentiality/Homo sapiens.csv',
    url: 'https://ndownloader.figshare.com/files/27902226',
  },
};

const setupDownloads = async () => {
  await Promise.all([
    downloadHttps(fsConfig.celldata.url, fsConfig.celldata.file),
    downloadHttps(fsConfig.effectsData.url, fsConfig.effectsData.file),
  ]);
};

const essentiality = async (options) => {
  if (!options.skipDownload) {
    await createFolder('./files/essentiality');
    await setupDownloads();
  }
};

module.exports = essentiality;
