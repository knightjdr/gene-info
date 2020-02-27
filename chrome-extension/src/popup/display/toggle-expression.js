import config from '../../config';

const toggleExpression = (expressionType, species) => {
  const element = document.querySelector(`.${expressionType}-expression`);
  const availableSpecies = config.tissues[expressionType];

  if (
    availableSpecies[species]
    && (availableSpecies[species].cells.length > 0 || availableSpecies[species].tissues.length > 0)
  ) {
    element.classList.remove('hide');
  } else {
    element.classList.add('hide');
  }
};

export default toggleExpression;
