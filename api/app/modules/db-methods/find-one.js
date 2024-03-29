const config = require('../../../config');
const database = require('../../connections/database');

const find = (
  collection,
  queryObject = {},
  returnObject = {},
) => (
  new Promise((resolve, reject) => {
    const db = database.connection;
    db.collection(`${config.database.prefix}${collection}`)
      .findOne(queryObject, { projection: returnObject })
      .then((document) => {
        if (document) {
          resolve([document]);
        } else {
          resolve([]);
        }
      })
      .catch((err) => {
        reject(err);
      });
  })
);
module.exports = find;
