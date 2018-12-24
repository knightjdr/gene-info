const createQuery = (field, term) => {
  let queryObj;
  if (field === 'gene') {
    const searchString = `^${term}$`;
    const re = new RegExp(searchString, 'i');
    queryObj = {
      $or: [
        { gene: { $regex: re } },
        { synonyms: re },
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
