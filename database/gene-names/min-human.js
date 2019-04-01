const readJSON = require('../helpers/read-json');
const writeJSON = require('../helpers/write-json');

const parseHuman = (file, folder, skip) => (
  new Promise((resolve, reject) => {
    if (skip) {
      resolve();
    } else {
      readJSON(file)
        .then((hgnc) => {
          const genes = hgnc.response.docs;
          const formatted = {};
          genes.forEach((gene) => {
            const id = gene.hgnc_id.split(':')[1];
            const alias = gene.alias_symbol || [];
            const previous = gene.prev_symbol || [];
            formatted[id] = {
              symbol: gene.symbol,
              synonyms: [...alias, ...previous],
            };
          });
          return writeJSON(`${folder}/Homo sapiens.json`, formatted);
        })
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    }
  })
);

module.exports = parseHuman;
