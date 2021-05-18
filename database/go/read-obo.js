const fs = require('fs');
const readline = require('readline');

const arrayUnique = require('../helpers/array-unique');
const uppercaseFirst = require('../helpers/uppercase-first');

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
        map[id] = uppercaseFirst(name);
      }
    };

    const fileStream = fs.createReadStream(file);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    rl.on('line', (line) => {
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
    rl.on('close', () => {
      addTerm(term);
      resolve({
        map,
        parents,
      });
    });
    rl.on('error', (err) => {
      reject(err);
    });
  })
);

const allParents = (terms) => {
  const findAllParents = (id, arr) => {
    const newArr = [...arr, ...terms[id]];
    if (terms[id].length > 0) {
      let parents = [];
      terms[id].map(parentId => findAllParents(parentId, newArr))
        .forEach((parentArr) => {
          parents = parents.concat(parentArr);
        });
      return parents;
    }
    return newArr;
  };
  const uniqueParents = {};
  Object.keys(terms).forEach((id) => {
    uniqueParents[id] = arrayUnique(findAllParents(id, []));
  });
  return uniqueParents;
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
