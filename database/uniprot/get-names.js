/* field structure
{
  recommendedName: [
    { fullName: [ 'name' || { _: 'name' }] },
  ],
  alternativeName: [
    { fullName: [ 'name' || { _: 'name' }] },
  ]
}
*/

const parseName = (name) => {
  if (typeof name === 'string') {
    return name;
  } if (typeof name === 'object') {
    return name._;
  }
  return '';
};

const getNames = (protein) => {
  const names = {
    alternative: [],
    full: '',
  };
  if (protein.recommendedName) {
    names.full = parseName(protein.recommendedName[0].fullName[0]);
  } if (protein.alternativeName) {
    names.alternative = protein.alternativeName.map(alternative => (
      parseName(alternative.fullName[0])
    ));
  }
  names.alternative = names.alternative.filter(name => name);
  return names;
};

module.exports = {
  getNames,
  parseName,
};
