import activationType from './activation-type';
import goNamespace from './go-namespace';
import reportType from './report-type';
import toggle from './toggle';

const bindListeners = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.activate-click').forEach((element) => {
      element.addEventListener('click', activationType);
    });
    document.querySelectorAll('.display-click').forEach((element) => {
      element.addEventListener('click', reportType);
    });
    document.querySelectorAll('.namespace-click').forEach((element) => {
      element.addEventListener('click', goNamespace);
    });
    document.querySelectorAll('.toggle').forEach((element) => {
      element.addEventListener('click', toggle);
    });
  });
};

export default bindListeners;
