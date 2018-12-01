const parseDescription = (description) => {
  const re = new RegExp(/\s+\(PubMed:[^)]+\)/g);
  return description.replace(re, '');
};

module.exports = parseDescription;
