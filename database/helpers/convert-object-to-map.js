const convertMapToObj = (map) => {
  const obj = {};
  map.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};

const convertObjToMap = (obj) => {
  const map = new Map();
  Object.entries(obj).forEach(([key, value]) => {
    map.set(key, value);
  });
  return map;
};

module.exports = {
  convertMapToObj,
  convertObjToMap,
};
