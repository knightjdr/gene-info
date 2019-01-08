const arrayUnique = require('../helpers/array-unique');
const round = require('../helpers/round');

const termGeneList = (genes, parents) => {
  const genesInTerm = {};

  /* Initialize array if empty, otherwise add gene */
  const addGene = (term, gene) => {
    if (genesInTerm[term]) {
      genesInTerm[term].push(gene);
    } else {
      genesInTerm[term] = [gene];
    }
  };

  /* Foreach gene get a list of all of the terms it has plus those terms' parents
  ** and then add the gene to the list of genes for each of those terms. */
  Object.entries(genes).forEach(([gene, terms]) => {
    let termWithParents = [];
    terms.forEach((term) => {
      termWithParents.push(term);
      termWithParents = termWithParents.concat(parents[term]);
    });
    termWithParents = arrayUnique(termWithParents);
    termWithParents.forEach((term) => {
      addGene(term, gene);
    });
  });

  // Remove duplicate genes from each term's list
  const unique = {};
  Object.entries(genesInTerm).forEach(([term, termGenes]) => {
    unique[term] = arrayUnique(termGenes);
  });
  return unique;
};

const informationContent = (genes, parents) => {
  const terms = termGeneList(genes, parents);
  const numTerms = Object.keys(terms).length;
  const ic = {};
  Object.entries(terms).forEach(([term, termGenes]) => {
    ic[term] = round(-Math.log10(termGenes.length / numTerms), 3);
  });
  return ic;
};

module.exports = {
  informationContent,
  termGeneList,
};
