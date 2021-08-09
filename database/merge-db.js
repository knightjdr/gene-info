const arrSortByTwoKeys = require('./helpers/arr-sort-by-two-keys');
const defineGeneNames = require('./gene-names/define');

const mergeDb = ([
  { proteinExpression },
  { rnaExpression },
  { effects: essentiality },
  db,
  domains,
  geneNames,
  interactions,
  localization,
  regions,
]) => (
  db.map((entry) => {
    const accession = entry.uniprot[0];
    const gene = defineGeneNames(entry, geneNames);
    const currDomains = domains[accession] ? domains[accession] : [];
    const currRegions = regions[accession] ? regions[entry.uniprot[0]] : [];
    const domainsRegions = arrSortByTwoKeys([...currDomains, ...currRegions], 'start', 'end', 'asc', 'numeric', 'numeric');

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
        hpa: entry['ensembl-gene'][0] && localization.hpa[entry['ensembl-gene'][0]]
          ? localization.hpa[entry['ensembl-gene'][0]]
          : {},
        uniprot: entry.localization.uniprot,
      },
      'protein-expression': proteinExpression[accession]
        ? proteinExpression[accession]
        : {},
      'rna-expression': entry['ensembl-gene'][0] && rnaExpression[entry['ensembl-gene'][0]]
        ? rnaExpression[entry['ensembl-gene'][0]]
        : {},
      essentiality: entry.geneid && essentiality[entry.geneid]
        ? essentiality[entry.geneid]
        : {},
    });
  })
);

module.exports = mergeDb;
