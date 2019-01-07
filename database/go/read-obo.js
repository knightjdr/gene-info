const LineByLineReader = require('line-by-line');

const arrayUnique = require('../helpers/array-unique');

const findImmediateParents = file => (
  new Promise((resolve, reject) => {
    let isHeader = true;
    const map = {};
    const parents = {};
    let term = {
      id: '',
      name: '',
      parents: [],
    };

    const idRegex = new RegExp(/^id: (GO:\d+)/);
    const isARegex = new RegExp(/^is_a: (GO:\d+)/);
    const nameRegex = new RegExp(/^name: (.+)/);
    const partOfRegex = new RegExp(/^relationship: part_of (GO:\d+)/);

    const addTerm = (nextTerm) => {
      const { id, name } = nextTerm;
      if (id) {
        parents[id] = nextTerm.parents;
      } if (id && name) {
        map[id] = name;
      }
    };

    const lineReader = new LineByLineReader(file);
    lineReader.on('line', (line) => {
      if (line.startsWith('[Term]')) {
        addTerm(term);
        term = {
          id: '',
          name: '',
          parents: [],
        };
        isHeader = false;
      } else if (!isHeader && idRegex.test(line)) {
        [, term.id] = line.match(idRegex);
      } else if (!isHeader && nameRegex.test(line)) {
        [, term.name] = line.match(nameRegex);
      } else if (!isHeader && isARegex.test(line)) {
        const [, parent] = line.match(isARegex);
        term.parents.push(parent);
      } else if (!isHeader && partOfRegex.test(line)) {
        const [, parent] = line.match(partOfRegex);
        term.parents.push(parent);
      }
    });
    lineReader.on('end', () => {
      addTerm(term);
      resolve({
        map,
        parents,
      });
    });
    lineReader.on('error', (err) => {
      reject(err);
    });
  })
);

const allParents = (terms) => {
  const findAllParents = (id, arr) => {
    const newArr = [...arr, ...terms[id]];
    if (terms[id].length > 0) {
      return terms[id].map(parentId => findAllParents(parentId, newArr))
        .reduce((accum, parentArr) => ([
          ...accum,
          ...parentArr,
        ]), []);
    }
    return newArr;
  };
  return Object.keys(terms).reduce((accum, id) => ({
    ...accum,
    [id]: arrayUnique(findAllParents(id, [])),
  }), {});
};

const readObo = file => (
  new Promise((resolve, reject) => {
    findImmediateParents(file)
      .then((obo) => {
        const parents = allParents(obo.parents);
        resolve({
          map: obo.map,
          parents,
        });
      })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = {
  allParents,
  readObo,
  findImmediateParents,
};
