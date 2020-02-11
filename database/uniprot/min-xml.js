/* eslint no-param-reassign: 0 */

const fs = require('fs');
const readline = require('readline');

const writeIDs = (ids, path, resolve, reject) => {
  fs.promises.writeFile(`${path}/uniprot-ids.json`, JSON.stringify(ids, null, 2), 'UTF8')
    .then(() => {
      resolve();
    })
    .catch((err) => {
      reject(err);
    });
};

/* Reads a Uniprot XML file and removes any fields and species not
** explicitely listed in arguments. Entries will get written to file
** based on species type. An ID file will also be written with all
** primary accessions and their species for species that are requested. */
const minXml = (file, path, speciesID, fields, skip) => (
  new Promise((resolve, reject) => {
    if (skip) {
      resolve();
    } else {
      let accession = '';
      let entry = '';
      const ids = {};
      let keepEntry = false;
      let keepField = false;
      let organism = '';

      const accessionRegex = new RegExp(/^ {2}<accession>([^<]+)<\/accession>/);
      const fieldLineRegex = new RegExp(/^ {2}<[^/]/);
      const fieldRegex = new RegExp(/^ {2}<(\w+)[\s>]/);
      const speciesRegex = new RegExp(/^ {4}<dbReference type="NCBI Taxonomy" id="(\d+)"\/>/);

      // Create stream for writing XML data.
      const streams = Object.values(speciesID).reduce((accum, specie) => {
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
          accession = '';
          entry = '';
          keepEntry = false;
          keepField = true;
          organism = '';
        } else if (line.startsWith('</entry>')) {
          if (keepEntry) {
            entry += `${line}\n`;
            streams[organism].write(entry);
            ids[accession] = organism;
          }
        } else if (fieldLineRegex.test(line)) {
          const field = line.match(fieldRegex)[1];
          keepField = fields.includes(field);
          if (
            field === 'accession'
            && !accession
          ) {
            [, accession] = line.match(accessionRegex);
          }
        } else if (line.startsWith('    <dbReference type="NCBI Taxonomy"')) {
          const [, taxonID] = line.match(speciesRegex);
          keepEntry = Boolean(speciesID[taxonID]);
          organism = speciesID[taxonID];
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
        writeIDs(ids, path, resolve, reject);
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    }
  })
);

module.exports = minXml;
