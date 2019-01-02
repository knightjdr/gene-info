const mkdirp = require('mkdirp');

const createFolder = name => (
  new Promise((resolve, reject) => {
    mkdirp(name, (err) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    });
  })
);

module.exports = createFolder;
