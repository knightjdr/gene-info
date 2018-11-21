const parseObjectEntry = entry => (
  typeof entry === 'object' ? entry._ : entry
);

const getComments = comments => (
  comments.reduce((accum, comment) => {
    let localizations;
    switch (comment.$.type) {
      case 'function':
        return {
          ...accum,
          description: parseObjectEntry(comment.text[0]),
        };
      case 'subcellular location':
        localizations = comment.subcellularLocation.reduce((accumLoc, localization) => (
          [
            ...accumLoc,
            ...localization.location.map(subLocalization => parseObjectEntry(subLocalization)),
          ]
        ), []);
        return {
          ...accum,
          localization: [...accum.localization, ...localizations],
        };
      default:
        return accum;
    }
  }, { description: '', localization: [] })
);

module.exports = getComments;
