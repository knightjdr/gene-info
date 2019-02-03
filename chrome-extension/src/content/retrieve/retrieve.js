import http from './http-promise';
import panel from '../templates/panel/panel';
import tooltip from '../templates/tooltip/tooltip';
import State from '../state';

const fetch = (species, field, gene, event) => {
  const route = `/${species.replace(' ', '-')}/${field}/${gene}`;
  http(route)
    .then((data) => {
      State.addReport(data);
      if (State.settings.report === 'detailed') {
        panel();
      } else {
        tooltip(event);
      }
    })
    .catch(() => {
      panel(0, true);
    });
};

const retrieveInfo = (event, text) => {
  const gene = text || window.getSelection().toString().trim();
  const shouldActivate = !State.settings.ctrl || (State.settings.ctrl && event.ctrlKey);
  if (gene && shouldActivate) {
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
