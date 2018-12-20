const fs = require('fs');
const readline = require('readline');

const handleHpaLines = file => (
  new Promise((resolve, reject) => {
    if (fs.existsSync(file)) {
      const localization = {};

      let header = true;
      const lineReader = readline.createInterface({
        input: fs.createReadStream(file),
      });
      lineReader.on('line', (line) => {
        if (!header) {
          const [accession, , , enhanced, supported, approved, uncertain] = line.split('\t');
          localization[accession] = {
            approved: approved.split(';'),
            enhanced: enhanced.split(';'),
            supported: supported.split(';'),
            uncertain: uncertain.split(';'),
          };
        }
        header = false;
      });
      lineReader.on('close', () => {
        resolve(localization);
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    } else {
      resolve({});
    }
  })
);

const localizationParse = hpa => (
  new Promise((resolve, reject) => {
    Promise.all([
      handleHpaLines(hpa),
    ])
      .then((values) => {
        const [hpaData] = values;
        resolve({
          hpa: hpaData,
        });
      })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = localizationParse;
