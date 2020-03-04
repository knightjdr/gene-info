const sortResults = (term, matches) => {
  const official = [];
  const nonOfficial = [];
  const termToMatch = term.toLowerCase();
  matches.forEach((match) => {
    if (match.gene.toLowerCase() === termToMatch) {
      official[0] = match;
    } else {
      nonOfficial.push(match);
    }
  });

  return [...official, ...nonOfficial];
};

module.exports = sortResults;
