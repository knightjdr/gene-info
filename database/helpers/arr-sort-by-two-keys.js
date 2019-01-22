const deepCopy = require('./deep-copy');
const sorting = require('./sort');

/* Sorts an array of objects by two keys
** dir = 'asc' yields sort order A, B, C or 1, 2, 3
** dir = 'des' yields sort order C, B, A or 3, 2, 1
** type = 'character' for character sorting, type = 'numeric' or 'bool'
** for boolean sorting for numeric sorting. */
const arrSortByTwoKeys = (arr, key1, key2, dir = 'asc', type1 = 'character', type2 = 'character') => {
  /* Make sure input variable is an array of objects, and that keys are defined.
  ** if not, simply return whatever arr is. */
  if (
    !Array.isArray(arr)
    || typeof arr[0] !== 'object'
    || !key1
    || !key2
  ) {
    return arr;
  }
  const multiplier = dir === 'des' ? -1 : 1;
  const sortArray = deepCopy(arr);
  const sortFunc1 = sorting[type1];
  const sortFunc2 = sorting[type2];
  sortArray.sort((a, b) => {
    const sort1 = multiplier * sortFunc1(a[key1], b[key1]);
    const sort2 = multiplier * sortFunc2(a[key2], b[key2]);
    if (sort1 < 0) {
      return -1;
    } if (
      sort1 === 0
      && sort2 < 0
    ) {
      return -1;
    } if (
      sort1 === 0
      && sort2 === 0
    ) {
      return 0;
    }
    return 1;
  });
  return sortArray;
};

module.exports = arrSortByTwoKeys;
