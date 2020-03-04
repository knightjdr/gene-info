import panel from '../templates/panel/panel';
import State from '../state';
import tooltip from '../templates/tooltip/tooltip';

export function selectChange() {
  const index = this.options[this.selectedIndex].value;
  State.setActiveReport(index);
  if (State.settings.report === 'detailed') {
    panel(Number(index));
  } else {
    tooltip(undefined, undefined, Number(index));
  }
}

export const removeSelectListener = () => {
  const el = State.shadowRoot.querySelector('.slim-select-style');
  if (el) {
    el.removeEventListener('change', selectChange);
  }
};

export const addSelectListener = (results) => {
  if (results && results.length > 1) {
    const el = State.shadowRoot.querySelector('.slim-select-style');
    el.addEventListener('change', selectChange);
  }
};
