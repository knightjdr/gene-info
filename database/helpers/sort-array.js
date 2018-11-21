const sortArray = {
  alphabetical: arr => (
    arr.sort((a, b) => a.localeCompare(b))
  ),
  alphabeticalByKey: (arr, key) => (
    arr.sort((a, b) => a[key].localeCompare(b[key]))
  ),
};

module.exports = sortArray;
