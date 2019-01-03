import panel from '../templates/panel';
import State from '../state';

const backReport = () => {
  State.removeReport();
  panel();
};

export const removeBackListener = () => {
  const el = document.getElementById('gene-info__panel-back');
  if (el) {
    el.removeEventListener('click', backReport);
  }
};

export const addBackListener = () => {
  const el = document.getElementById('gene-info__panel-back');
  if (el) {
    el.addEventListener('click', backReport);
  }
};
