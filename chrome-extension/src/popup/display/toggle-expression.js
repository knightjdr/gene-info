import config from '../../config';

const toggleExpression = (expressionType, species) => {
  const element = document.querySelector(`.${expressionType}-expression`);
  const availableSpecies = Object.keys(config.tissues[expressionType]);

  if (availableSpecies.includes(species)) {
    element.classList.remove('hide');
  } else {
    element.classList.add('hide');
  }
};

export default toggleExpression;
