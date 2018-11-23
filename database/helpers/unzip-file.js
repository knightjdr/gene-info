const fs = require('fs');
const unzip = require('unzipper');
const zlib = require('zlib');

const method = {
  gunzip: zlib.createGunzip,
  unzip: unzip.ParseOne,
};

const gunzipFile = (type, file, dest, skip) => (
  new Promise((resolve, reject) => {
    if (skip) {
      resolve();
    } else {
      const readStream = fs.createReadStream(file);
      const writeStream = fs.createWriteStream(dest);
      readStream.pipe(method[type]()).pipe(writeStream);
      readStream.on('end', () => {
        writeStream.end();
        resolve();
      });
      readStream.on('error', (err) => {
        writeStream.end();
        reject(err);
      });
    }
  })
);

module.exports = gunzipFile;
