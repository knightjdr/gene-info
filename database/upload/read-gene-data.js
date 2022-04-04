const AWS = require('aws-sdk');
const fs = require('fs');
const { chain } = require('stream-chain');
const { parser } = require('stream-json');
const { streamArray } = require('stream-json/streamers/StreamArray');

const getIdentifiers = (gene) => {
  const ids = [
    `GENE#${gene.gene.toLowerCase()}`,
  ];

  if (gene['ensembl-gene']?.length > 0) {
    ids.push(...gene['ensembl-gene'].map(id => `ENSEMBLGENE#${id.toLowerCase()}`));
  } if (gene['ensembl-protein']?.length > 0) {
    ids.push(...gene['ensembl-protein'].map(id => `ENSEMBLPROTEIN#${id.toLowerCase()}`));
  } if (gene.geneid) {
    ids.push(`GENEID#${gene.geneid}`);
  } if (gene.locus) {
    ids.push(`LOCUS#${gene.locus.toLowerCase()}`);
  } if (gene.orf?.length > 0) {
    ids.push(...gene.orf.map(id => `ORF#${id.toLowerCase()}`));
  } if (gene.refseq?.length > 0) {
    ids.push(...gene.refseq.map(id => `REFSEQ#${id.toLowerCase()}`));
  } if (gene.synonyms?.length > 0) {
    ids.push(...gene.synonyms.map(id => `GENE#${id.toLowerCase()}`));
  } if (gene.uniprot?.length > 0) {
    ids.push(...gene.uniprot.map(id => `UNIPROT#${id.toLowerCase()}`));
  } if (gene.geneAlternateSymbols?.length > 0) {
    ids.push(...gene.geneAlternateSymbols.map(id => `GENE#${id.toLowerCase()}`));
  } if (gene.wormbase) {
    ids.push(`WORMBASE#${gene.wormbase.toLowerCase()}`);
  }

  return ids;
};

const readGeneData = ({ dbClient, file, table }) => (
  new Promise((resolve) => {
    const ids = {};
    const pipeline = chain([
      fs.createReadStream(file),
      parser(),
      streamArray(),
      data => data.value,
    ]);

    pipeline.on('data', async (gene) => {
      try {
        const uniprotID = gene.uniprot[0].toLowerCase();
        ids[uniprotID] = getIdentifiers(gene);

        const item = {
          pk: { S: `UNIPROT#${uniprotID}` },
          sk: { S: `METADATA#${uniprotID}` },
          ...AWS.DynamoDB.Converter.marshall(gene),
        };
        const params = {
          Item: item,
          TableName: table,
        };
        return dbClient.putItem(params).promise();
      } catch (err) {
        console.error(err);
        return Promise.resolve();
      }
    });
    pipeline.on('end', () => {
      resolve(ids);
    });
  })
);

module.exports = readGeneData;
