import fetch from './fetch';
import State from '../state';

const shouldActivate = (e, activate, ctrl) => (
  activate
  || !ctrl
  || (ctrl && e.ctrlKey)
  || (ctrl && e.metaKey)
);

const retrieveInfo = (event, text, activate) => {
  const gene = text || window.getSelection().toString().trim();
  if (gene && shouldActivate(event, activate, State.settings.ctrl)) {
    const field = State.settings.auto ? 'auto' : State.settings.field;
    if (State.settings.activate === 'click') {
      fetch(State.settings.species, field, gene, event);
    } else if (
      State.settings.activate === 'drag'
      && State.mdTime
      && Date.now() - State.mdTime > 500
    ) {
      fetch(State.settings.species, field, gene, event);
      State.clearMdTime();
    }
  }
};

export default retrieveInfo;
