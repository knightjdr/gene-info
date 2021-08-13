import clickOutside from './click-outside';
import removePanel from '../remove/remove-panel';
import removeTooltip from '../remove/remove-tooltip';
import State from '../state';

let method;

export const removeCloseListener = () => {
  const button = State.shadowRoot.getElementById('close');
  if (button) {
    button.removeEventListener('click', method);
  }
};

export const addCloseListener = () => {
  method = State.settings.report === 'detailed' ? removePanel : removeTooltip;
  const button = State.shadowRoot.getElementById('close');
  if (button) {
    button.addEventListener('click', method);
  }

  const el = State.shadowRoot.querySelector('.close-on-click-outside');
  if (el) {
    clickOutside(el, method);
  }
};
