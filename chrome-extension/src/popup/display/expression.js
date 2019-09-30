import config from '../../config';

const displayExpression = (expressionType, species) => {
  const elements = document.querySelectorAll(`.${expressionType}-expression`);
  const availableSpecies = Object.keys(config.defaultTissues[expressionType]);

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

export default displayExpression;
