const fs = require('fs');
const yauzl = require('yauzl');
const zlib = require('zlib');

const gunzipFile = (type, file, dest, skip) => (
  new Promise((resolve, reject) => {
    if (skip) {
      resolve();
    } else if (type === 'gunzip') {
      const readStream = fs.createReadStream(file);
      const writeStream = fs.createWriteStream(dest);
      readStream.pipe(zlib.createGunzip()).pipe(writeStream);
      readStream.on('end', () => {
        writeStream.end();
        resolve();
      });
      readStream.on('error', (err) => {
        writeStream.end();
        reject(err);
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
                reject(readErr);
              }
            });
          });
        } else {
          reject(openErr);
        }
      });
    } else {
      reject(new Error('Unknown compression type'));
    }
  })
);

module.exports = gunzipFile;
