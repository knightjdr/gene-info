/* eslint no-console: 0 */
/* eslint no-param-reassign: 0 */

const fs = require('fs');

const arrayUnique = require('../helpers/array-unique');
const fetchJson = require('../helpers/fetch');
const sortArray = require('../helpers/sort-array');

const parseMotifs = (json) => {
  const motifs = json.motifs.map(motif => ({
    end: motif.end,
    name: motif.type,
    start: motif.start,
  }));
  return sortArray.numericalByKey(motifs, 'start');
};

const fetchGraphic = id => (
  new Promise((resolve) => {
    fetchJson(`http://pfam.xfam.org/protein/${id}/graphic`)
      .then((json) => {
        const motifs = parseMotifs(json[0]);
        resolve(motifs);
      })
      .catch(() => {
        resolve([]);
      });
  })
);

const writeMotifs = (id, motifs, stream) => {
  motifs.forEach((motif) => {
    stream.write(`${id}\t${motif.name}\t${motif.start}\t${motif.end}\n`);
  });
};

const iterateIDs = async (ids, streams) => {
  await Object.entries(ids).reduce(async (promise, [id, specie]) => {
    await promise;
    const motifs = await fetchGraphic(id);
    writeMotifs(id, motifs, streams[specie]);
  }, Promise.resolve());
};

const getMotifs = (path, ids) => (
  new Promise((resolve, reject) => {
    const species = arrayUnique(Object.values(ids));
    const streams = Object.values(species).reduce((accum, specie) => {
      const writeStream = fs.createWriteStream(`${path}/${specie}.tsv`, { flags: 'w' });
      accum[specie] = writeStream;
      return accum;
    }, {});

    iterateIDs(ids, streams)
      .then(() => {
        Object.values(streams).forEach((stream) => {
          stream.end();
        });
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = {
  fetchGraphic,
  parseMotifs,
  getMotifs,
  writeMotifs,
};
