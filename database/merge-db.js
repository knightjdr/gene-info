const mergeDb = ([
  db,
  { rnaExpression },
  domains,
  interactions,
  localization,
  motifs,
]) => (
  db.map(entry => ({
    ...entry,
    domains: entry.uniprot[0] && domains[entry.uniprot[0]] ? domains[entry.uniprot[0]] : [],
    interactors: interactions[entry.gene] || [],
    localization: {
      compartments: entry.gene && localization.compartments[entry.gene]
        ? localization.compartments[entry.gene]
        : { accession: '', terms: [] },
      hpa: entry['ensembl-gene'][0] && localization.hpa[entry['ensembl-gene'][0]] ? localization.hpa[entry['ensembl-gene'][0]] : {},
      uniprot: entry.localization.uniprot,
    },
    motifs: entry.uniprot[0] && motifs[entry.uniprot[0]] ? motifs[entry.uniprot[0]] : [],
    'rna-expression': entry['ensembl-gene'][0] && rnaExpression[entry['ensembl-gene'][0]] ? rnaExpression[entry['ensembl-gene'][0]] : {},
  }))
);

module.exports = mergeDb;
