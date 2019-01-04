import panel from '../templates/panel';
import State from '../state';

const backReport = () => {
  State.removeReport();
  panel();
};

export const removeBackListener = () => {
  const el = State.shadowRoot.getElementById('back');
  if (el) {
    el.removeEventListener('click', backReport);
  }
};

export const addBackListener = () => {
  const el = State.shadowRoot.getElementById('back');
  if (el) {
    el.addEventListener('click', backReport);
  }
};
