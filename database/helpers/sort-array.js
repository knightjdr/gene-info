const sortArray = {
  alphabetical: arr => (
    arr.sort((a, b) => a.localeCompare(b))
  ),
  alphabeticalByKey: (arr, key) => (
    arr.sort((a, b) => a[key].localeCompare(b[key]))
  ),
  alphabeticalByTwoKeys: (arr, key1, key2) => (
    arr.sort((a, b) => {
      if (a[key1].localeCompare(b[key1]) < 0) {
        return -1;
      } if (a[key1].localeCompare(b[key1]) > 0) {
        return 1;
      } if (
        a[key1].localeCompare(b[key1]) === 0
        && a[key2].localeCompare(b[key2]) < 0
      ) {
        return -1;
      } if (
        a[key1].localeCompare(b[key1]) === 0
        && a[key2].localeCompare(b[key2]) > 0
      ) {
        return 1;
      }
      return 0;
    })
  ),
};

module.exports = sortArray;
