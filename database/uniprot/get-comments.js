const parseDescription = require('./parse-description');

const parseObjectEntry = entry => (
  typeof entry === 'object' ? entry._ : entry
);

const getComments = (comments) => {
  if (comments && Array.isArray(comments)) {
    return comments.reduce((accum, comment) => {
      let localizations;
      let pathology;
      switch (comment.$.type) {
        case 'disease': {
          if (comment.disease) {
            pathology = {
              description: parseDescription(comment.disease[0].description[0]),
              mim: comment.disease[0].dbReference[0].$.type === 'MIM' ? Number(comment.disease[0].dbReference[0].$.id) : undefined,
              name: comment.disease[0].name[0],
              uniprotID: comment.disease[0].$.id,
            };
          } else {
            pathology = {
              description: parseDescription(typeof comment.text[0] === 'string' ? comment.text[0] : comment.text[0]._),
              mim: undefined,
              name: '',
              uniprotID: '',
            };
          }
          return {
            ...accum,
            pathology: [...accum.pathology, pathology],
          };
        }
        case 'disruption phenotype': {
          pathology = {
            description: parseDescription(parseObjectEntry(comment.text[0])),
            mim: undefined,
            name: '',
            uniprotID: '',
          };
          return {
            ...accum,
            pathology: [...accum.pathology, pathology],
          };
        }
        case 'function':
          if (!accum.description) {
            return {
              ...accum,
              description: parseDescription(parseObjectEntry(comment.text[0])),
            };
          }
          return accum;
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
    }, { description: '', pathology: [], localization: [] });
  }
  return { description: '', localization: [] };
};

module.exports = getComments;
