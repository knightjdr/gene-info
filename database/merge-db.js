const sortArray = require('./helpers/sort-array');

const mergeDb = ([
  db,
  { rnaExpression },
  domains,
  interactions,
  localization,
  regions,
]) => (
  db.map((entry) => {
    const currDomains = entry.uniprot[0] && domains[entry.uniprot[0]]
      ? domains[entry.uniprot[0]]
      : [];
    const currRegions = entry.uniprot[0] && regions[entry.uniprot[0]]
      ? regions[entry.uniprot[0]]
      : [];
    const domainsRegions = sortArray.numericalByKey([...currDomains, ...currRegions], 'start', 'asc');
    return ({
      ...entry,
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
  })
);

module.exports = mergeDb;
