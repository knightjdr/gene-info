const displayHPA = (species) => {
  const elements = document.querySelectorAll('.hpa');
  if (species === 'Homo sapiens') {
    elements.forEach((element) => {
      element.classList.remove('hide');
    });
  } else {
    elements.forEach((element) => {
      element.classList.add('hide');
    });
  }
};

export default displayHPA;
