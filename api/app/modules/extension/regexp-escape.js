const regexpEscape = str => (
  String(str).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
);

module.exports = regexpEscape;
