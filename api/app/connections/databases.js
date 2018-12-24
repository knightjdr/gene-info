const init = require('./init');
const Logger = require('../../logger');

// initialize database when class is first requried
const database = {
  client: null,
  close: () => (
    new Promise((resolve, reject) => {
      if (database.connection) {
        database.client.close()
          .then(() => {
            database.client = null;
            database.connection = null;
            Logger.info('database connection closed');
            resolve();
          })
          .catch((err) => {
            Logger.error(err);
            reject();
          });
      }
      resolve();
    })
  ),
  connection: null,
  init: () => (
    new Promise((resolve, reject) => {
      init()
        .then((initObj) => {
          database.client = initObj.client;
          database.connection = initObj.db;
          resolve();
        })
        .catch((err) => {
          Logger.error(err);
          reject(err);
        });
    })
  ),
};

module.exports = database;
