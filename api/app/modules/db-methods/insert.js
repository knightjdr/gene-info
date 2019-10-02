const config = require('../../../config');
const database = require('../../connections/database');

const find = (
  collection,
  insertObject = {},
) => (
  new Promise((resolve, reject) => {
    const db = database.connection;
    db.collection(`${config.database.prefix}${collection}`)
      .insertOne(insertObject)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  })
);
module.exports = find;
