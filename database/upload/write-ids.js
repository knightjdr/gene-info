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
  const merged = mergeIDs(ids);

  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar.start(Object.keys(merged).length, 0);

  await Object.entries(merged).reduce(async (p, [pk, uniprot]) => {
    await p;
    bar.increment();

    const item = {
      pk: { S: pk },
      sk: { S: species },
      ids: { SS: [...new Set(uniprot)] },
    };
    const params = {
      Item: item,
      TableName: table,
    };
    return dbClient.putItem(params).promise();
  }, Promise.resolve());

  bar.stop();
};

module.exports = writeIDs;
