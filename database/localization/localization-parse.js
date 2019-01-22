/* eslint no-console: 0 */

const fs = require('fs');
const readline = require('readline');

const arrSort = require('../helpers/arr-sort');
const arrayUnique = require('../helpers/array-unique');
const config = require('../config');

const handleCompartmentLines = file => (
  new Promise((resolve, reject) => {
    if (fs.existsSync(file)) {
      const localization = {};
      const addTerm = (gene, term, accession) => {
        if (localization[gene]) {
          localization[gene].terms.push(term);
        } else {
          localization[gene] = {
            accession,
            terms: [term],
          };
        }
      };

      const lineReader = readline.createInterface({
        input: fs.createReadStream(file),
      });
      lineReader.on('line', (line) => {
        const [accession, gene, term, , score] = line.split('\t');
        if (Number(score) >= config.compartmentsThreshold) {
          addTerm(gene, term, accession);
        }
      });
      lineReader.on('close', () => {
        resolve(localization);
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    } else {
      console.error(`Missing Compartments localization file: ${file}`);
      resolve({});
    }
  })
);

const handleHpaLines = file => (
  new Promise((resolve, reject) => {
    if (fs.existsSync(file)) {
      const localization = {};

      let header = true;
      const lineReader = readline.createInterface({
        input: fs.createReadStream(file),
      });
      lineReader.on('line', (line) => {
        if (!header) {
          const [accession, , , enhanced, supported, approved, uncertain] = line.split('\t');
          localization[accession] = {};
          if (approved) {
            localization[accession].approved = approved.split(';');
          }
          if (enhanced) {
            localization[accession].enhanced = enhanced.split(';');
          }
          if (supported) {
            localization[accession].supported = supported.split(';');
          }
          if (uncertain) {
            localization[accession].uncertain = uncertain.split(';');
          }
        }
        header = false;
      });
      lineReader.on('close', () => {
        resolve(localization);
      });
      lineReader.on('error', (err) => {
        reject(err);
      });
    } else {
      console.error(`Missing HPA localization file: ${file}`);
      resolve({});
    }
  })
);

const removeParents = (terms, parents) => (
  terms.reduce((accum, term) => {
    if (!parents.includes(term)) {
      return [...accum, term];
    }
    return accum;
  }, [])
);

const uniqueParents = (terms, parents) => (
  arrayUnique(terms.reduce((accum, term) => ([
    ...accum,
    ...parents[term] || [],
  ]), []))
);

// First filter out GO terms that are parents of another term
const filterCompartments = (compartments, obo) => {
  const filtered = {};

  Object.entries(compartments).forEach(([gene, values]) => {
    // Get a unique list of all parents for current gene's GO terms.
    const parents = uniqueParents(values.terms, obo.parents);

    // Remove all terms that are a parent of another term.
    const deepest = removeParents(values.terms, parents);

    // Convert from ID to name, then sort alphabetically.
    const sorted = arrSort.alphabetical(deepest.map(term => obo.map[term]));

    filtered[gene] = {
      accession: values.accession,
      terms: sorted,
    };
  });

  return filtered;
};

const localizationParse = (hpa, compartments, annotations, obo) => (
  new Promise((resolve, reject) => {
    Promise.all([
      handleCompartmentLines(compartments),
      handleHpaLines(hpa),
    ])
      .then((values) => {
        const [compartmentsData, hpaData] = values;
        resolve({
          compartments: filterCompartments(compartmentsData, obo),
          hpa: hpaData,
        });
      })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = {
  filterCompartments,
  handleCompartmentLines,
  localizationParse,
  removeParents,
  uniqueParents,
};
