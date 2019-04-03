const writeJSON = require('./write-json');

// idList converts an array of gene symbols to a hash for writing to file.
// It will ignore all numbers and gene names 2 letters or less.
const idList = async (file, ids) => {
  const idHash = {};
  ids.forEach((id) => {
    if (!Number(id) && id.length > 2) {
      idHash[id] = 1;
    }
  });
  await writeJSON(file, idHash);
};

module.exports = idList;
