import http from './http-promise';
import showReport from './show-report';
import State from '../state';

const fetch = (species, field, searchTerm, event) => {
  const route = `/${species.replace(' ', '-')}/${field}/${searchTerm}`;
  State.setSearchTerm(searchTerm);
  http(route)
    .then((data) => {
      State.addReport(data);
      showReport(event, State.settings.report);
    })
    .catch((err) => {
      console.log(err);
      showReport(event, State.settings.report, true);
    });
};

export default fetch;
