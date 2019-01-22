const deepCopy = require('./deep-copy');
const sorting = require('./sort');

/* Sorts an array of objects by an object key
** dir = 'asc' yields sort order A, B, C or 1, 2, 3
** dir = 'des' yields sort order C, B, A or 3, 2, 1
** type = 'character' for character sorting, type = 'numeric' for numeric sorting */
const arrSortByKey = (arr, key, dir = 'asc', type = 'character') => {
  // make sure input variable is an array of objects, and that a key is defined
  // if not, simply return whatever arr is
  if (
    !Array.isArray(arr)
    || typeof arr[0] !== 'object'
    || !key
  ) {
    return arr;
  }
  const multiplier = dir === 'des' ? -1 : 1;
  const sortArray = deepCopy(arr);
  const sortFunc = type === 'numeric' ? sorting.numeric : sorting.character;
  sortArray.sort((a, b) => (
    multiplier * sortFunc(a[key], b[key])
  ));
  return sortArray;
};

module.exports = arrSortByKey;
