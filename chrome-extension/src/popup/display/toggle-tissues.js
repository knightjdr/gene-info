import config from '../../config';

const toggleTissues = ({ className, species, tissueID }) => {
  const element = document.querySelector(`.${className}`);
  const availableSpecies = config.tissues[tissueID];

  if (
    availableSpecies[species]
    && (availableSpecies[species].cells.length > 0 || availableSpecies[species].tissues.length > 0)
  ) {
    element.classList.remove('hide');
  } else {
    element.classList.add('hide');
  }
};

export default toggleTissues;
