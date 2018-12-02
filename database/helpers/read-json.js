const fs = require('fs');

const readJson = file => (
  new Promise((resolve, reject) => {
    fs.readFile(file, 'UTF8', (err, data) => {
      if (!err) {
        resolve(JSON.parse(data));
      } else {
        reject(err);
      }
    });
  })
);

module.exports = readJson;
