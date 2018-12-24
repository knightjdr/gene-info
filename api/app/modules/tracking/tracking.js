const insert = require('../db-methods/insert');
const ipInfo = require('./ip-info');

const tracking = (ip, species, field, gene) => (
  new Promise((resolve) => {
    const info = ipInfo(ip);
    const insertObj = {
      city: info.city,
      country: info.country,
      date: new Date(),
      field,
      gene,
      region: info.region,
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
