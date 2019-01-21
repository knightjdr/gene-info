const parseJSON = (jsonString) => {
  try {
    const o = JSON.parse(jsonString);
    if (o && typeof o === 'object') {
      return o;
    }
  } catch (e) {
    return false;
  }
  return false;
};

module.exports = parseJSON;
