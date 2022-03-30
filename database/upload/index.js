const AWS = require('aws-sdk');

const parseSpecies = require('./parse-species');
const readFiles = require('./read-files');
const readGeneData = require('./read-gene-data');
const writeIDs = require('./write-ids');

const main = async ({ endpoint, folder, region, table }) => {
  const dbClient = new AWS.DynamoDB({
    endpoint,
    region,
  });
  const files = await readFiles(folder);
  await files.slice(1).reduce(async (p, file) => {
    await p;
    const species = parseSpecies(file);
    console.log(`Processing ${species}`);
    const ids = await readGeneData({ dbClient, file, table });
    return writeIDs({ dbClient, ids, species, table });
  }, Promise.resolve());
};

const endpoint = process.argv[2];
const folder = process.argv[5];
const region = process.argv[3];
const table = process.argv[4];

main({ endpoint, folder, region, table });
