const fs = require('fs/promises');

const readFiles = async (folder) => {
  const files = await fs.readdir(folder);
  return files.filter(file => file.endsWith('.json')).map(file => `${folder}/${file}`);
};

module.exports = readFiles;
