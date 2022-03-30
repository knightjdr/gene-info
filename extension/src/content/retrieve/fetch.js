import http from './http-promise';
import showReport from './show-report';
import State from '../state';

const fetch = (species, field, searchTerm, event) => {
  const route = `?identifier=${field}&species=${species.replace(' ', '-')}&term=${searchTerm}`;
  State.setSearchTerm(searchTerm);
  http(route)
    .then((data) => {
      State.addReport(data);
      showReport(event, State.settings.report);
    })
    .catch(() => {
      showReport(event, State.settings.report, true);
    });
};

export default fetch;
