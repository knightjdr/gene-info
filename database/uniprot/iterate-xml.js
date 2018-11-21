const fs = require('fs');
const readline = require('readline');

const convertXml = require('../helpers/convert-xml');
const entryParse = require('./entry-parse');

/* Iterate over an Uniprot XML file line by line and concatenate each entry to
** a string. The entry is then converted to a JS object and parsed for desired fields. */
const iterateXml = file => (
  new Promise((resolve, reject) => {
    const entries = [];
    let entry = '';

    const lineReader = readline.createInterface({
      input: fs.createReadStream(file),
    });
    lineReader.on('line', async (line) => {
      if (line.startsWith('<entry')) {
        entry = line;
      } else if (line.startsWith('</entry>')) {
        entry += `${line}\n`;
        const js = await convertXml(entry);
        const parsed = entryParse(js.entry);
        if (parsed) {
          entries.push(parsed);
        }
      } else {
        entry += `${line}\n`;
      }
    });
    lineReader.on('close', () => {
      resolve(entries);
    });
    lineReader.on('error', (err) => {
      reject(err);
    });
  })
);

module.exports = iterateXml;
