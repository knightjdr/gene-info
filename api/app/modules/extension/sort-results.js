const getIDMatcher = (field, term) => (
  field === 'gene'
    ? match => match.gene.toLowerCase() === term.toLowerCase()
    : match => match[field] === term
);

const sortResults = (query, matches) => {
  const { field, term } = query;

  const official = [];
  const nonOfficial = [];

  const matchID = getIDMatcher(field, term);
  matches.forEach((match) => {
    if (matchID(match)) {
      official[0] = match;
    } else {
      nonOfficial.push(match);
    }
  });

  return [...official, ...nonOfficial];
};

module.exports = sortResults;
