const createFolder = require('../helpers/create-folder');
const downloadHttps = require('../helpers/download-https');

const fsConfig = {
  celldata: {
    file: './files/depmap/Homo sapiens-cell-info.csv',
    url: 'https://ndownloader.figshare.com/files/27902376',
  },
  effectsData: {
    file: './files/depmap/Homo sapiens.csv',
    url: 'https://ndownloader.figshare.com/files/27902226',
  },
};

const setupDownloads = async () => {
  await Promise.all([
    downloadHttps(fsConfig.celldata.url, fsConfig.celldata.file),
    downloadHttps(fsConfig.effectsData.url, fsConfig.effectsData.file),
  ]);
};

const depMap = async (options) => {
  if (!options.skipDownload) {
    await createFolder('./files/depmap');
    await setupDownloads();
  }
};

module.exports = depMap;
