const arraySort = {
  alphabetical: arr => (
    arr.sort((a, b) => a.localeCompare(b))
  ),
};

module.exports = arraySort;
