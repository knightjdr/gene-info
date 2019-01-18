const insert = require('../db-methods/insert');

const tracking = (species, field, known) => (
  new Promise((resolve) => {
    const insertObj = {
      field,
      known,
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
