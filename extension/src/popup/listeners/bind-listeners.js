import activationCheck from './activation-check';
import advancedSettings from './advanced-settings';
import namespaceCheck from './namespace-check';
import onChange from './on-change';
import reportCheck from './report-check';
import speciesOnChange from './species-on-change';
import toggle from './toggle';
import { drag, dragEnd, dragStart } from './drag';
import { onSearchClick, search } from './search';

const bindListeners = () => {
  document.querySelectorAll('.click-activate').forEach((element) => {
    element.addEventListener('click', activationCheck);
  });
  document.querySelectorAll('.advanced-settings').forEach((element) => {
    element.addEventListener('click', advancedSettings);
  });
  document.querySelectorAll('.click-display').forEach((element) => {
    element.addEventListener('click', reportCheck);
  });
  document.querySelectorAll('.click-namespace').forEach((element) => {
    element.addEventListener('click', namespaceCheck);
  });
  document.querySelectorAll('.input').forEach((element) => {
    element.addEventListener('change', onChange);
  });
  document.querySelectorAll('.select').forEach((element) => {
    element.addEventListener('change', onChange);
  });
  document.querySelectorAll('.toggle').forEach((element) => {
    element.addEventListener('click', toggle);
  });

  // Species select menu.
  document.getElementById('species').addEventListener('change', speciesOnChange);

  // Search listeners
  document.getElementById('button_search').addEventListener('click', onSearchClick);
  document.getElementById('input_search').addEventListener('keypress', search);

  // Drag listeners
  document.querySelectorAll('div[draggable="true"]').forEach((element) => {
    element.addEventListener('drag', drag);
  });
  document.querySelectorAll('div[draggable="true"]').forEach((element) => {
    element.addEventListener('dragend', dragEnd);
  });
  document.querySelectorAll('div[draggable="true"]').forEach((element) => {
    element.addEventListener('dragstart', dragStart);
  });
};

export default bindListeners;
