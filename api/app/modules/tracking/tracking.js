const insert = require('../db-methods/insert');
const ipInfo = require('./ip-info');

const tracking = (ip, species, field, gene) => (
  new Promise((resolve) => {
    const info = ipInfo(ip);
    const insertObj = {
      country: info.country,
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
