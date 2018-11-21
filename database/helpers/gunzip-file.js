const gunzip = require('gunzip-file');

const gunzipFile = (source, target, skip) => (
  new Promise((resolve) => {
    if (skip) {
      resolve();
    } else {
      gunzip(source, target, () => {
        resolve();
      });
    }
  })
);

module.exports = gunzipFile;
