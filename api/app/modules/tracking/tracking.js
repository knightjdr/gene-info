const insert = require('../db-methods/insert');

const tracking = (species, field, gene) => (
  new Promise((resolve) => {
    const insertObj = {
      field,
      gene,
      species,
    };
    insert('tracking', insertObj)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        resolve(err);
      });
  })
);

module.exports = tracking;
