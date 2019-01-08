/* eslint no-console: 0 */

const fs = require('fs');
const readline = require('readline');

const config = require('../config');
const sortArray = require('../helpers/sort-array');
const { informationContent } = require('../go/information-content');
const { readAnnotations } = require('../go/read-annotations');

const handleCompartmentLines = file => (
  new Promise((resolve, reject) => {
    if (fs.existsSync(file)) {
      const localization = {};
      const addTerm = (gene, term, accession) => {
        if (localization[gene]) {
          localization[gene].terms.push({ term, ic: 0 });
        } else {
          localization[gene] = {
            accession,
            terms: [{ term, ic: 0 }],
          };
        }
      };

      let header = true;
      const lineReader = readline.createInterface({
        input: fs.createReadStream(file),
      });
      lineReader.on('line', (line) => {
        if (!header) {
          const [accession, gene, term] = line.split('\t');
          addTerm(gene, term, accession);
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

const filterCompartments = (compartments, ic, mapping) => {
  const filtered = {};

  /* Add information content to each term and sort. After
  ** sorting, grab compartments limit, convert GO IDs to names
  ** and sort alphabetically. */
  Object.entries(compartments).forEach(([gene, values]) => {
    const terms = values.terms.map(term => ({
      term,
      ic: ic[term] || 0,
    }));
    let sorted = sortArray.numericalByKey(terms, 'ic', 'des')
      .slice(0, config.compartmentsLimit)
      .map(term => mapping[term]);
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
          compartments: filterCompartments(compartmentsData, ic, obo.map),
          hpa: hpaData,
        });
      })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = localizationParse;
