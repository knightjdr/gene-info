'use strict';

const Sort = {
  string: (arr, key) => {
    const nameSort = (a, b, key) => {
      var nameA = a[key].toLowerCase();
      var nameB = b[key].toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    };
    return arr.sort((a,b) => { nameSort(a, b, key); });
  }
};
module.exports = Sort;
