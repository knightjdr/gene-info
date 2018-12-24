const config = require('../../../config');
const database = require('../../connections/database');

const find = (
  collection,
  queryObject = {},
  returnObject = {},
  sorted = {},
  limit = 0,
) => (
  new Promise((resolve, reject) => {
    const db = database.connection;
    db.collection(`${config.database.prefix}${collection}`)
      .find(queryObject, { projection: returnObject })
      .sort(sorted)
      .limit(limit)
      .toArray()
      .then((documents) => {
        resolve(documents);
      })
      .catch((err) => {
        reject(err);
      });
  })
);
module.exports = find;
