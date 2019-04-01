const arrSort = require('../helpers/arr-sort');
const arrayUnique = require('../helpers/array-unique');
const convertGreek = require('./convert-greek');

const defineGeneNames = (entry, official) => {
  const field = official && official.field ? official.field : undefined;
  const uniprotSymbol = entry.gene;
  const uniprotSynonyms = entry.synonyms;

  let symbol;
  let synonyms = [];

  // If their is a field for matching official gene names to UniProt and
  // UniProt has an identifier for that field, and that identifier is in
  // the offical object, update gene name and synonyms based on official information.
  if (
    field
    && entry[field]
    && official.geneNames[entry[field]]
  ) {
    const id = entry[field];
    const officialSymbol = official.geneNames[id].symbol;

    symbol = officialSymbol;
    synonyms = [...uniprotSynonyms, ...official.geneNames[id].synonyms];

    // If UniProt symbol does not match the official one, add it to synonyms,
    if (symbol !== uniprotSymbol) {
      synonyms.push(uniprotSymbol);
    }

    synonyms = arrayUnique(synonyms);
  } else {
    symbol = uniprotSymbol;
    synonyms = uniprotSynonyms;
  }

  // Append gene names with greek words as gene name with greek letter
  synonyms.push(...convertGreek([symbol, ...synonyms]));
  return {
    symbol,
    synonyms: arrSort.alphabetical(arrayUnique(synonyms)),
  };
};

module.exports = defineGeneNames;
