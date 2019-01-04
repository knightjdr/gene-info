import State from '../state';

function goSelector() {
  const selectedType = this.dataset.type;
  const namespaces = ['bp', 'cc', 'mf'];
  namespaces.forEach((namespace) => {
    if (namespace === selectedType) {
      State.shadowRoot.getElementById(`go-button-${namespace}`).classList.add('active');
      State.shadowRoot.getElementById(`go-terms-${namespace}`).style.display = 'block';
    } else {
      State.shadowRoot.getElementById(`go-button-${namespace}`).classList.remove('active');
      State.shadowRoot.getElementById(`go-terms-${namespace}`).style.display = 'none';
    }
  });
};

export const removeGoListener = () => {
  if (State.shadowRoot.getElementById('go-buttons')) {
    State.shadowRoot.querySelectorAll('.go-button').forEach((el) => {
      el.removeEventListener('click', goSelector);
    });
  }
};

export const addGoListener = () => {
  if (State.shadowRoot.getElementById('go-buttons')) {
    State.shadowRoot.querySelectorAll('.go-button').forEach((el) => {
      el.addEventListener('click', goSelector);
    });
  }
};
