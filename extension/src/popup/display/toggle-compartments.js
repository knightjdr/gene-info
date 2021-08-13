import config from '../../config';

const toggleCompartments = (species) => {
  const element = document.querySelector('.compartments');
  if (config.compartmentSpecies.includes(species)) {
    element.classList.remove('hide');
  } else {
    element.classList.add('hide');
  }
};

export default toggleCompartments;
