const findScientific = (names) => {
  const scientificName = names.find(name => name.$.type === 'scientific');
  return scientificName ? scientificName._ : null;
};

module.exports = findScientific;
