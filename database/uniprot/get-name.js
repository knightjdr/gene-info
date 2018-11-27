const getName = (recommended) => {
  if (typeof recommended === 'string') {
    return recommended;
  } if (typeof recommended === 'object') {
    return recommended._;
  }
  return '';
};

module.exports = getName;
