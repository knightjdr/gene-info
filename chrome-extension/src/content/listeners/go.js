function goSelector() {
  const selectedType = this.dataset.type;
  const namespaces = ['bp', 'cc', 'mf'];
  namespaces.forEach((namespace) => {
    if (namespace === selectedType) {
      document.getElementById(`gene-info__go-button-${namespace}`).classList.add('active');
      document.getElementById(`gene-info__go-terms-${namespace}`).style.display = 'block';
    } else {
      document.getElementById(`gene-info__go-button-${namespace}`).classList.remove('active');
      document.getElementById(`gene-info__go-terms-${namespace}`).style.display = 'none';
    }
  });
};

export const removeGoListener = () => {
  if (document.getElementById('gene-info__go-buttons')) {
    document.querySelectorAll('.gene-info__go-button').forEach((el) => {
      el.removeEventListener('click', goSelector);
    });
  }
};

export const addGoListener = () => {
  if (document.getElementById('gene-info__go-buttons')) {
    document.querySelectorAll('.gene-info__go-button').forEach((el) => {
      el.addEventListener('click', goSelector);
    });
  }
};
