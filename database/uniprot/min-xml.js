/* eslint no-param-reassign: 0 */

const fs = require('fs');
const readline = require('readline');

/* Reads a Uniprot XML file and removes any fields and species not
** explicitely listed in arguments. */
const minXml = (file, path, species, fields, skip) => (
  new Promise((resolve, reject) => {
    if (skip) {
      resolve();
    } else {
      let entry = '';
      let keepEntry = false;
      let keepField = false;
      let organism = '';

      const fieldLineRegex = new RegExp(/^ {2}<[^/]/);
      const fieldRegex = new RegExp(/^ {2}<(\w+)[\s>]/);
      const speciesRegex = new RegExp(/^ {4}<name type="scientific">([^<]+)<\/name>/);

      const streams = species.reduce((accum, specie) => {
        const writeStream = fs.createWriteStream(`${path}/${specie}.xml`, { flags: 'w' });
        writeStream.write('<uniprot>\n');
        accum[specie] = writeStream;
        return accum;
      }, {});

      const lineReader = readline.createInterface({
        input: fs.createReadStream(file),
      });
      lineReader.on('line', (line) => {
        if (line.startsWith('<entry')) {
          entry = '';
          keepEntry = false;
          keepField = true;
          organism = '';
        } else if (line.startsWith('</entry>')) {
          if (keepEntry) {
            entry += `${line}\n`;
            streams[organism].write(entry);
          }
        } else if (fieldLineRegex.test(line)) {
          const field = line.match(fieldRegex)[1];
          keepField = fields.includes(field);
        } else if (line.startsWith('    <name type="scientific">')) {
          [, organism] = line.match(speciesRegex);
          keepEntry = species.includes(organism);
        }
        if (keepField) {
          entry += `${line}\n`;
        }
      });
      lineReader.on('close', () => {
        Object.values(streams).forEach((stream) => {
          stream.write('</uniprot>\n');
          stream.end();
        });
        resolve();
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    }
  })
);

module.exports = minXml;
