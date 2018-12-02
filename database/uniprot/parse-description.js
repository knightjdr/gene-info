const parseDescription = (description) => {
  const re = new RegExp(/\s*\([^P]*PubMed:[^)]+\)/g);
  return description.replace(re, '');
};

module.exports = parseDescription;
