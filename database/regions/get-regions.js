/* eslint no-console: 0 */
/* eslint no-param-reassign: 0 */

const fs = require('fs');

const arrayUnique = require('../helpers/array-unique');
const fetchJson = require('../helpers/fetch');

const parseRegions = json => (
  json.motifs.map(region => ({
    end: region.end,
    name: region.type,
    start: region.start,
  }))
);

const fetchGraphic = id => (
  new Promise((resolve) => {
    fetchJson(`http://pfam.xfam.org/protein/${id}/graphic`)
      .then((json) => {
        const regions = parseRegions(json[0]);
        resolve(regions);
      })
      .catch(() => {
        resolve([]);
      });
  })
);

const writeRegions = (id, regions, stream) => {
  regions.forEach((region) => {
    stream.write(`${id}\t${region.name}\t${region.start}\t${region.end}\n`);
  });
};

const iterateIDs = async (ids, streams) => {
  await Object.entries(ids).reduce(async (promise, [id, specie]) => {
    await promise;
    const regions = await fetchGraphic(id);
    writeRegions(id, regions, streams[specie]);
  }, Promise.resolve());
};

const getRegions = (path, ids) => (
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
  parseRegions,
  getRegions,
  writeRegions,
};
