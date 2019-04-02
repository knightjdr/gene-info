const regexpEscape = require('./regexp-escape');

const createQuery = (field, term) => {
  let queryObj;
  if (field === 'gene') {
    const searchString = `^${regexpEscape(term)}$`;
    const re = new RegExp(searchString, 'i');
    queryObj = {
      $or: [
        { gene: { $regex: re } },
        { synonyms: re },
        { geneAlternateSymbols: re },
      ],
    };
  } else {
    queryObj = {
      [field]: term,
    };
  }
  return queryObj;
};

module.exports = createQuery;
