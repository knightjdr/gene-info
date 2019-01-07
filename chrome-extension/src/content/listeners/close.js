import removePanel from '../remove/remove-panel';
import removeTooltip from '../remove/remove-tooltip';
import State from '../state';

let method;

const stopPropogation = (event) => {
  event.stopPropagation();
};

export const removeCloseListener = () => {
  const button = State.shadowRoot.getElementById('close');
  if (button) {
    button.removeEventListener('click', method);
  }
  const backdrop = State.shadowRoot.getElementById('backdrop');
  if (backdrop) {
    backdrop.removeEventListener('click', method);
    State.shadowRoot.getElementById('tooltip').addEventListener('click', stopPropogation);
  }
};

export const addCloseListener = () => {
  method = State.settings.report === 'detailed' ? removePanel : removeTooltip;
  const button = State.shadowRoot.getElementById('close');
  if (button) {
    button.addEventListener('click', method);
  }
  const backdrop = State.shadowRoot.getElementById('backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', method);
    State.shadowRoot.getElementById('tooltip').addEventListener('click', stopPropogation);
  }
};
