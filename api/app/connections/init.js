const { MongoClient } = require('mongodb');
const config = require('../../config');

// initialize a mongodb database
const init = () => (
  new Promise((resolve, reject) => {
    const dbParams = `${config.database.user}:${config.database.pw}@localhost:27017/${config.database.name}`;
    const url = `mongodb://${dbParams}`;
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((client) => {
        resolve({
          client,
          db: client.db(config.database.name),
        });
      })
      .catch((err) => {
        reject(err);
      });
  })
);
module.exports = init;
