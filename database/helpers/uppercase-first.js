// Convert the first letter of a string to uppercase
const uppercaseFirst = str => (
  str[0].toUpperCase() + str.slice(1)
);

module.exports = uppercaseFirst;
