const readJSON = require('../helpers/read-json');

const defineField = (specie) => {
  switch (specie) {
    case 'Homo sapiens':
      return 'hgnc';
    default:
      return undefined;
  }
};

const geneNameParse = (file, specie) => (
  new Promise((resolve) => {
    const field = defineField(specie);
    readJSON(file)
      .then((geneNames) => {
        resolve({
          field,
          geneNames,
        });
      })
      .catch(() => {
        resolve({
          field,
          geneNames: {},
        });
      });
  })
);

module.exports = {
  defineField,
  geneNameParse,
};
