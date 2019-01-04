import removePanel from '../remove/remove-panel';
import State from '../state';

export const removeCloseListener = () => {
  const el = State.shadowRoot.getElementById('close');
  if (el) {
    el.removeEventListener('click', removePanel);
  }
};

export const addCloseListener = () => {
  const el = State.shadowRoot.getElementById('close');
  if (el) {
    el.addEventListener('click', removePanel);
  }
};
