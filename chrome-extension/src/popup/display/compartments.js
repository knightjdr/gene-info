/* eslint no-param-reassign: 0 */

const availableSpecies = [
  'Arabidopsis-thaliana',
  'Caenorhabditis-elegans',
  'Drosophila-melanogaster',
  'Homo-sapiens',
  'Mus-musculus',
  'Saccharomyces-cerevisiae',
];

const displayCompartments = (species) => {
  const elements = document.querySelectorAll('.compartments');
  if (availableSpecies.includes(species)) {
    elements.forEach((element) => {
      element.classList.remove('hide');
    });
  } else {
    elements.forEach((element) => {
      element.classList.add('hide');
    });
  }
};

export default displayCompartments;
