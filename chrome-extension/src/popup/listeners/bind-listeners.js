import activationCheck from './activation-check';
import namespaceCheck from './namespace-check';
import onChange from './on-change';
import onEnter from './on-enter';
import reportCheck from './report-check';
import toggle from './toggle';

const bindListeners = () => {
  document.querySelectorAll('.click-activate').forEach((element) => {
    element.addEventListener('click', activationCheck);
  });
  document.querySelectorAll('.click-display').forEach((element) => {
    element.addEventListener('click', reportCheck);
  });
  document.querySelectorAll('.click-namespace').forEach((element) => {
    element.addEventListener('click', namespaceCheck);
  });
  document.querySelectorAll('.input-search').forEach((element) => {
    element.addEventListener('keypress', onEnter);
  });
  document.querySelectorAll('.select').forEach((element) => {
    element.addEventListener('change', onChange);
  });
  document.querySelectorAll('.toggle').forEach((element) => {
    element.addEventListener('click', toggle);
  });
};

export default bindListeners;
