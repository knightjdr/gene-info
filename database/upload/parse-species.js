const path = require('path');

const parseSpecies = (file) => {
  const re = new RegExp(/[\s()-]/g);
  let species = path.parse(file).name;
  species = species.toLowerCase();
  return species.replaceAll(re, '');
};

module.exports = parseSpecies;
