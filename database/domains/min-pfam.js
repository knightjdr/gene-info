/* eslint no-param-reassign: 0 */

const fs = require('fs');
const readline = require('readline');

const readJson = require('../helpers/read-json');
const { convertObjToMap } = require('../helpers/convert-object-to-map');

const handleLines = (file, path, speciesIDs, uniprot) => (
  new Promise((resolve, reject) => {
    const streams = Object.values(speciesIDs).reduce((accum, specie) => {
      const writeStream = fs.createWriteStream(`${path}/${specie}.tsv`, { flags: 'w' });
      accum[specie] = writeStream;
      return accum;
    }, {});

    const fileStream = fs.createReadStream(file);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    // Create lookup map. This is to prevent a memory leak in the 'line' event handler
    // when directly using the object 'uniprot' itself for looking up accessions.
    const uniprotAccessionMap = convertObjToMap(uniprot);

    rl.on('line', (line) => {
      const [uniprotAccession, , , , pfamAccession, seqStart, seqEnd] = line.split('\t');

      if (uniprotAccessionMap.has(uniprotAccession)) {
        const organism = uniprotAccessionMap.get(uniprotAccession);
        streams[organism].write(`${uniprotAccession}\t${pfamAccession}\t${seqStart}\t${seqEnd}\n`);
      }
    });

    rl.on('close', () => {
      Object.values(streams).forEach((stream) => {
        stream.end();
      });
      resolve();
    });

    rl.on('error', (err) => {
      reject(err);
    });
  })
);

const minPfam = async (file, path, speciesIDs, uniprotIDs, skip) => {
  if (!skip) {
    const uniprot = await readJson(uniprotIDs);
    await handleLines(file, path, speciesIDs, uniprot);
  }
};

module.exports = minPfam;
