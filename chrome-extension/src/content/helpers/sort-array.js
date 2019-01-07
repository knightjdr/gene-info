const sortArray = {
  alphabeticalByKey: (arr, key) => (
    arr.sort((a, b) => a[key].localeCompare(b[key]))
  ),
};

module.exports = sortArray;
