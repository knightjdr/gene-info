import config from '../../config';

const species = () => {
  const select = document.getElementById('select_species');
  config.species.forEach((specie) => {
    const option = document.createElement('option');
    option.value = specie;
    option.innerHTML = specie;
    select.appendChild(option);
  });
};

export default species;
