const mergeDb = (db, interactions) => (
  db.map(entry => ({
    ...entry,
    interactors: interactions[entry.gene] || [],
  }))
);

module.exports = mergeDb;
