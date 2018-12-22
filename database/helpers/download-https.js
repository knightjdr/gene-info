const fs = require('fs');
const https = require('https');

const downloadHttp = (url, dest, skip) => (
  new Promise((resolve, reject) => {
    if (skip) {
      resolve();
    } else {
      const stream = fs.createWriteStream(dest);
      https.get(url, (response) => {
        response.on('data', (chunk) => {
          stream.write(chunk);
        });
        response.on('end', () => {
          stream.end();
          resolve();
        });
      }).on('error', (err) => {
        fs.unlink(dest);
        reject(err);
      });
    }
  })
);

module.exports = downloadHttp;
