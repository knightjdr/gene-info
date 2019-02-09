import State from '../state';
import sortArray from '../helpers/sort-array';
import sortIcon from '../templates/assets/sort';
import sortDownIcon from '../templates/assets/sort-down';
import sortUpIcon from '../templates/assets/sort-up';
import { addInteractorListener, removeInteractorListener } from './interactor';
import { fillRows } from '../templates/panel/interactor';

const switchSortDirection = prevDirection => (
  prevDirection === 'asc' ? 'des' : 'asc'
);

const biogridSort = () => {
  // Remove table row listeners.
  removeInteractorListener();

  // Sort interactor list and update table.
  const sortDir = State.settings.interactorSortKey === 'biogrid'
    ? switchSortDirection(State.settings.interactorSortDirection) : 'des';
  const sorted = sortArray.lengthByKey(State.latestReport().interactors, 'biogrid', sortDir);
  State.shadowRoot.querySelector('#interactor_tbody').innerHTML = fillRows(sorted);

  // Add back table row listeners.
  addInteractorListener();

  // Change sort icons.
  State.shadowRoot.querySelector('#interactor_biogrid').innerHTML = sortDir === 'asc' ? sortUpIcon : sortDownIcon;
  State.shadowRoot.querySelector('#interactor_intact').innerHTML = sortIcon;
  State.shadowRoot.querySelector('#interactor_target').innerHTML = sortIcon;

  // Update sort state.
  State.updateSetting('interactorSortKey', 'biogrid');
  State.updateSetting('interactorSortDirection', sortDir);
};

const intactSort = () => {
  // Remove table row listeners.
  removeInteractorListener();

  // Sort interactor list and update table.
  const sortDir = State.settings.interactorSortKey === 'intact'
    ? switchSortDirection(State.settings.interactorSortDirection) : 'des';
  const sorted = sortArray.lengthByKey(State.latestReport().interactors, 'intact', sortDir);
  State.shadowRoot.querySelector('#interactor_tbody').innerHTML = fillRows(sorted);

  // Add back table row listeners.
  addInteractorListener();

  // Change sort icons.
  State.shadowRoot.querySelector('#interactor_biogrid').innerHTML = sortIcon;
  State.shadowRoot.querySelector('#interactor_intact').innerHTML = sortDir === 'asc' ? sortUpIcon : sortDownIcon;
  State.shadowRoot.querySelector('#interactor_target').innerHTML = sortIcon;

  // Update sort state.
  State.updateSetting('interactorSortKey', 'intact');
  State.updateSetting('interactorSortDirection', sortDir);
};

const targetSort = () => {
  // Remove table row listeners.
  removeInteractorListener();

  // Sort interactor list and update table.
  const sortDir = State.settings.interactorSortKey === 'target'
    ? switchSortDirection(State.settings.interactorSortDirection) : 'asc';
  const sorted = sortArray.alphabeticalByKey(State.latestReport().interactors, 'gene', sortDir);
  State.shadowRoot.querySelector('#interactor_tbody').innerHTML = fillRows(sorted);

  // Add back table row listeners.
  addInteractorListener();

  // Change sort icons.
  State.shadowRoot.querySelector('#interactor_biogrid').innerHTML = sortIcon;
  State.shadowRoot.querySelector('#interactor_intact').innerHTML = sortIcon;
  State.shadowRoot.querySelector('#interactor_target').innerHTML = sortDir === 'asc' ? sortUpIcon : sortDownIcon;

  // Update sort state.
  State.updateSetting('interactorSortKey', 'target');
  State.updateSetting('interactorSortDirection', sortDir);
};

export const removeInteractorSortListener = () => {
  if (State.shadowRoot.querySelector('.interactor-table')) {
    State.shadowRoot.querySelector('#interactor_biogrid').removeEventListener('click', biogridSort);
    State.shadowRoot.querySelector('#interactor_intact').removeEventListener('click', intactSort);
    State.shadowRoot.querySelector('#interactor_target').removeEventListener('click', targetSort);
  }
};

export const addInteractorSortListener = () => {
  if (State.shadowRoot.querySelector('.interactor-table')) {
    State.shadowRoot.querySelector('#interactor_biogrid').addEventListener('click', biogridSort);
    State.shadowRoot.querySelector('#interactor_intact').addEventListener('click', intactSort);
    State.shadowRoot.querySelector('#interactor_target').addEventListener('click', targetSort);
  }
};
