const mergeTissues = (cells, tissues) => {
  const keys = [...new Set([...Object.keys(cells), ...Object.keys(tissues)])];
  const merged = {};
  keys.forEach((key) => {
    merged[key] = {
      cells: cells[key] || {},
      tissues: tissues[key] || {},
    };
  });
  return merged;
};

module.exports = mergeTissues;
