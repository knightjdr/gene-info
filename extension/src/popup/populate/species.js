import config from '../../config';

const species = () => {
  const select = document.getElementById('species');
  config.species.forEach((specie) => {
    const option = document.createElement('option');
    option.value = specie;
    option.textContent = specie;
    select.appendChild(option);
  });
};

export default species;
