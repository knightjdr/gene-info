const mkdirp = require('mkdirp');

const createFolder = async (name) => {
  await mkdirp(name);
};

module.exports = createFolder;
