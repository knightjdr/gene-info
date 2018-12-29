import dbConfig from '../../../../database/config';

const species = () => {
  const select = document.getElementById('select_species');
  dbConfig.species.forEach((specie) => {
    const option = document.createElement('option');
    option.value = specie.split(' ').join('-');
    option.innerHTML = specie;
    select.appendChild(option);
  });
};

export default species;
