const parseObjectEntry = entry => (
  typeof entry === 'object' ? entry._ : entry
);

const getComments = (comments) => {
  if (comments && Array.isArray(comments)) {
    return comments.reduce((accum, comment) => {
      let localizations;
      switch (comment.$.type) {
        case 'function':
          return {
            ...accum,
            description: parseObjectEntry(comment.text[0]),
          };
        case 'subcellular location':
          if (comment.subcellularLocation) {
            localizations = comment.subcellularLocation.reduce((accumLoc, localization) => (
              [
                ...accumLoc,
                ...localization.location.map(subLocalization => parseObjectEntry(subLocalization)),
              ]
            ), []);
          } else {
            localizations = [];
          }
          return {
            ...accum,
            localization: [...accum.localization, ...localizations],
          };
        default:
          return accum;
      }
    }, { description: '', localization: [] });
  }
  return { description: '', localization: [] };
};

module.exports = getComments;
