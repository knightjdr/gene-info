const mergeDb = ([
  db,
  { rnaExpression },
  domains,
  interactions,
]) => (
  db.map(entry => ({
    ...entry,
    domains: domains[entry.uniprot] || [],
    interactors: interactions[entry.gene] || [],
    'rna-expression': rnaExpression[entry['ensembl-gene']] || { cells: {}, tissues: {} },
  }))
);

module.exports = mergeDb;
