const mergeDb = (db, domains, interactions) => (
  db.map(entry => ({
    ...entry,
    domains: domains[entry.uniprot] || [],
    interactors: interactions[entry.gene] || [],
  }))
);

module.exports = mergeDb;
