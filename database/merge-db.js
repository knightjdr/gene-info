const arrSortByTwoKeys = require('./helpers/arr-sort-by-two-keys');
const defineGeneNames = require('./gene-names/define');

const mergeDb = ([
  db,
  { rnaExpression },
  domains,
  geneNames,
  interactions,
  localization,
  regions,
]) => {
  const ids = [];
  const merged = db.map((entry) => {
    const gene = defineGeneNames(entry, geneNames);
    const currDomains = entry.uniprot[0] && domains[entry.uniprot[0]]
      ? domains[entry.uniprot[0]]
      : [];
    const currRegions = entry.uniprot[0] && regions[entry.uniprot[0]]
      ? regions[entry.uniprot[0]]
      : [];
    const domainsRegions = arrSortByTwoKeys([...currDomains, ...currRegions], 'start', 'end', 'asc', 'numeric', 'numeric');
    const currIDs = [
      gene.symbol,
      ...gene.geneAlternateSymbols,
      ...gene.synonyms,
      ...entry.uniprot,
      ...entry['ensembl-gene'],
      ...entry['ensembl-protein'],
      ...entry.refseq,
    ];
    ids.push(...currIDs);
    return ({
      ...entry,
      gene: gene.symbol,
      synonyms: gene.synonyms,
      geneAlternateSymbols: gene.geneAlternateSymbols,
      domains: domainsRegions,
      interactors: interactions[entry.gene] || [],
      localization: {
        compartments: entry.gene && localization.compartments[entry.gene]
          ? localization.compartments[entry.gene]
          : { accession: '', terms: [] },
        hpa: entry['ensembl-gene'][0] && localization.hpa[entry['ensembl-gene'][0]] ? localization.hpa[entry['ensembl-gene'][0]] : {},
        uniprot: entry.localization.uniprot,
      },
      'rna-expression': entry['ensembl-gene'][0] && rnaExpression[entry['ensembl-gene'][0]] ? rnaExpression[entry['ensembl-gene'][0]] : {},
    });
  });
  return [merged, ids];
};

module.exports = mergeDb;
