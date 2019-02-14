const Ftp = require('ftp');
const fs = require('fs');

const downloadFile = (host, file, dest, skip) => (
  new Promise((resolve, reject) => {
    if (skip) {
      resolve();
    } else {
      const outFile = fs.createWriteStream(dest);
      const client = new Ftp();
      client.on('ready', () => {
        client.get(file, (err, stream) => {
          if (err) {
            fs.unlink(dest, (unlinkErr) => {
              if (!unlinkErr) {
                reject(err);
              } else {
                reject(unlinkErr);
              }
            });
          }
          stream.once('close', () => {
            client.end();
            outFile.close();
            resolve();
          });
          stream.pipe(outFile);
        });
      });
      client.connect({ host });
    }
  })
);

module.exports = downloadFile;
