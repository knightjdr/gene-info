const fs = require('fs');
const yauzl = require('yauzl');
const zlib = require('zlib');

const joinError = require('../helpers/join-error');

const gunzipFile = (type, file, dest, skip) => (
  new Promise((resolve, reject) => {
    if (skip) {
      resolve();
    } else if (type === 'gunzip') {
      const readStream = fs.createReadStream(file);
      const writeStream = fs.createWriteStream(dest);
      readStream.pipe(zlib.createGunzip())
        .pipe(writeStream)
        .on('error', (err) => {
          reject(joinError(err, file));
        })
        .on('finish', () => {
          writeStream.end();
          resolve();
        });
      readStream.on('error', (err) => {
        writeStream.end();
        reject(joinError(err, file));
      });
    } else if (type === 'unzip') {
      yauzl.open(file, { lazyEntries: true }, (openErr, zipfile) => {
        if (!openErr) {
          zipfile.readEntry();
          zipfile.on('entry', (entry) => {
            const writeStream = fs.createWriteStream(dest);
            zipfile.openReadStream(entry, (readErr, readStream) => {
              if (!readErr) {
                readStream.on('end', () => {
                  resolve();
                });
                readStream.pipe(writeStream);
              } else {
                reject(joinError(readErr, file));
              }
            });
          });
        } else {
          reject(joinError(openErr, file));
        }
      });
    } else {
      reject(new Error(`${file}: Unknown compression type`));
    }
  })
);

module.exports = gunzipFile;
