import removePanel from '../remove/remove-panel';

export const removeCloseListener = () => {
  const el = document.getElementById('gene-info__panel-remove');
  if (el) {
    el.removeEventListener('click', removePanel);
  }
};

export const addCloseListener = () => {
  const el = document.getElementById('gene-info__panel-remove');
  if (el) {
    el.addEventListener('click', removePanel);
  }
};
