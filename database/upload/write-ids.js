/* eslint-disable no-await-in-loop */
const cliProgress = require('cli-progress');

const mergeIDs = (ids) => {
  const merged = {};
  Object.entries(ids).forEach(([uniprot, pks]) => {
    pks.forEach((pk) => {
      if (!merged[pk]) {
        merged[pk] = [];
      }
      merged[pk].push(uniprot);
    });
  });
  return merged;
};

const writeIDs = async ({ dbClient, ids, species, table }) => {
  try {
    const merged = mergeIDs(ids);
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar.start(Object.keys(merged).length, 0);

    const batchSize = 25;

    for (let i = 0; i < merged.length; i += batchSize) {
      const batch = Object.entries(merged).slice(i, i + batchSize);
      const items = batch.map(([pk, uniprot]) => ({
        PutRequest: {
          Item: {
            pk: { S: pk },
            sk: { S: species },
            uniprots: { SS: [...new Set(uniprot)] },
          },
        },
      }));

      const params = {
        RequestItems: {
          [table]: items,
        },
      };

      await dbClient.batchWriteItem(params).promise();
      bar.increment(batchSize);
    }
    bar.stop();
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeIDs;
