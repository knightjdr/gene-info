const mergeDb = ([
  db,
  { rnaExpression },
  domains,
  interactions,
  localization,
]) => (
  db.map(entry => ({
    ...entry,
    domains: domains[entry.uniprot] || [],
    interactors: interactions[entry.gene] || {},
    localization: {
      compartments: Boolean(localization.compartments[entry['ensembl-protein']]),
      hpa: localization.hpa[entry['ensembl-gene']] || {},
      uniprot: entry.localization.uniprot,
    },
    'rna-expression': rnaExpression[entry['ensembl-gene']] || { cells: {}, tissues: {} },
  }))
);

module.exports = mergeDb;
