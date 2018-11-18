const gunzip = require('gunzip-file');

const gunzipFile = (source, target) => (
  new Promise((resolve) => {
    gunzip(source, target, () => {
      console.log('here');
      resolve();
    });
  })
);

module.exports = gunzipFile;
