// Deep copy an object.
const deepCopy = obj => (
  obj ? JSON.parse(JSON.stringify(obj)) : null
);

module.exports = deepCopy;
