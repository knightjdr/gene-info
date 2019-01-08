/* eslint no-console: 0 */

const fs = require('fs');
const readline = require('readline');

const arrayUnique = require('../helpers/array-unique');
const config = require('../config');
const sortArray = require('../helpers/sort-array');
const { informationContent } = require('../go/information-content');
const readAnnotations = require('../go/read-annotations');

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

/* First filter out GO terms that are parents of another term.
** then keep top five. */
const filterCompartments = (compartments, ic, obo) => {
  const filtered = {};

  Object.entries(compartments).forEach(([gene, values]) => {
    // Get a unique list of all parents for current gene's GO terms.
    const parents = uniqueParents(values.terms, obo.parents);

    // Remove all terms that are a parent of another term.
    const deepest = removeParents(values.terms, parents);

    // Add information content.
    const withIC = deepest.map(term => ({
      term,
      ic: ic[term] || 0,
    }));

    // Sort by IC, grab top entries and convert from ID to name, then sort alphabetically.
    let sorted = sortArray.numericalByKey(withIC, 'ic', 'des')
      .slice(0, config.compartmentsLimit)
      .map(term => obo.map[term.term]);
    sorted = sortArray.alphabetical(sorted);

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
      readAnnotations(annotations),
    ])
      .then((values) => {
        const [compartmentsData, hpaData, geneAnnotations] = values;
        const ic = informationContent(geneAnnotations, obo.parents);
        resolve({
          compartments: filterCompartments(compartmentsData, ic, obo),
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
