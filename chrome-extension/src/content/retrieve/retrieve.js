import http from './http-promise';
import State from '../state';

const fetch = (species, field, gene, event) => {
  const route = `/${species.replace(' ', '-')}/${field}/${gene}`;
  http(route)
    .then((data) => {
      console.log(data);
      State.addReport(data);
      if (State.report === 'detailed') {
        // removeTooltip();
        // createDetailedTemplate(data[0], data, details.displayOptions);
      } else {
        // removePanel();
        // createTooltipTemplate(event, data[0], data, details.displayOptions);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const retrieveInfo = (event, text) => {
  const field = State.settings.auto ? 'auto' : State.settings.field;
  const gene = text || window.getSelection().toString().trim();
  if (gene && State.settings.activate === 'click') {
    fetch(State.settings.species, field, gene, event);
  } else if (
    gene
    && State.settings.activate === 'drag'
    && State.mdTime
    && Date.now() - State.mdTime > 500
  ) {
    fetch(gene, event);
    State.clearMdTime();
  }
};

export default retrieveInfo;
