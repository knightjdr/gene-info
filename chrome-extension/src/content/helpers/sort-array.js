const sortArray = {
  alphabeticalByKey: (arr, key, dir = 'asc') => {
    if (dir === 'asc') {
      return arr.sort((a, b) => a[key].localeCompare(b[key]));
    }
    return arr.sort((a, b) => b[key].localeCompare(a[key]));
  },
  lengthByKey: (arr, key, dir = 'asc') => {
    if (dir === 'asc') {
      return arr.sort((a, b) => a[key].length - b[key].length);
    }
    return arr.sort((a, b) => b[key].length - a[key].length);
  },
};

module.exports = sortArray;
