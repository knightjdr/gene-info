const fs = require('fs');

const writeJson = (filename, obj) => (
  new Promise((resolve, reject) => {
    fs.writeFile(filename, JSON.stringify(obj), 'UTF8', (err) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    });
  })
);

module.exports = writeJson;
