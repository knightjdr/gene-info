import config from '../../config';

const displayCompartments = (species) => {
  const elements = document.querySelectorAll('.compartments');
  if (config.compartmentSpecies.includes(species)) {
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
