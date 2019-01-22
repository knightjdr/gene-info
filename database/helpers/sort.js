// Sort two booleans, characters, numbers.
const sort = {
  bool: (a, b) => {
    if (a && !b) {
      return 1;
    } if (!a && b) {
      return -1;
    }
    return 0;
  },
  character: (a, b) => {
    // Ensure a and b are not null or if one is null sort as if less than the other.
    if (
      !a
      && !b
    ) {
      return 0;
    } if (!a) {
      return 1;
    } if (!b) {
      return -1;
    }
    const nameA = String(a).toLowerCase();
    const nameB = String(b).toLowerCase();
    if (nameA < nameB) {
      return -1;
    } if (nameA > nameB) {
      return 1;
    }
    return 0;
  },
  numeric: (x, y) => {
    /* Ensure x and y are both numeric. If either is null,
    ** treat null as greater than numbers */
    if (
      (Number.isNaN(Number(x)) || x == null)
      && (Number.isNaN(Number(y)) || y == null)
    ) {
      return 0;
    } if (
      (Number.isNaN(Number(x)) || x == null)
    ) {
      return 1;
    } if (
      (Number.isNaN(Number(y)) || y == null)
    ) {
      return -1;
    }
    // x and y are numeric, now convert to numbers and sort.
    const xsort = Number(x);
    const ysort = Number(y);
    return xsort - ysort;
  },
};

module.exports = sort;
