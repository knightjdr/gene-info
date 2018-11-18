const gunzip = require('gunzip-file');

const gunzipFile = (source, target) => (
  new Promise((resolve) => {
    gunzip(source, target, () => {
      resolve();
    });
  })
);

module.exports = gunzipFile;
