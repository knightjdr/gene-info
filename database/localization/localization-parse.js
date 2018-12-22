/* eslint no-console: 0 */

const fs = require('fs');
const readline = require('readline');

const handleCompartmentLines = file => (
  new Promise((resolve, reject) => {
    if (fs.existsSync(file)) {
      const localization = {};

      let header = true;
      const lineReader = readline.createInterface({
        input: fs.createReadStream(file),
      });
      lineReader.on('line', (line) => {
        if (!header) {
          const [accession] = line.split('\t');
          localization[accession] = true;
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
      console.error(`Missing Compartments localization file: ${file}`);
      resolve({});
    }
  })
);

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
      console.error(`Missing HPA localization file: ${file}`);
      resolve({});
    }
  })
);

const localizationParse = (hpa, compartments) => (
  new Promise((resolve, reject) => {
    Promise.all([
      handleCompartmentLines(compartments),
      handleHpaLines(hpa),
    ])
      .then((values) => {
        const [compartmentsData, hpaData] = values;
        resolve({
          compartments: compartmentsData,
          hpa: hpaData,
        });
      })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = localizationParse;
