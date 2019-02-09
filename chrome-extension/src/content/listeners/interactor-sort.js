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

const sortInteractions = (field, defaultDirection, sortMethod) => {
  // Remove table row listeners.
  removeInteractorListener();

  // Sort interactor list and update table.
  const sortDir = State.settings.interactorSortKey === field
    ? switchSortDirection(State.settings.interactorSortDirection) : defaultDirection;
  const sorted = sortMethod(State.latestReport().interactors, field, sortDir);
  State.shadowRoot.querySelector('#interactor_tbody').innerHTML = fillRows(sorted);

  // Add back table row listeners.
  addInteractorListener();

  // Change sort icons.
  ['biogrid', 'gene', 'intact'].forEach((buttonField) => {
    if (buttonField === field) {
      State.shadowRoot.querySelector(`#interactor_${buttonField}`).innerHTML = sortDir === 'asc' ? sortUpIcon : sortDownIcon;
    } else {
      State.shadowRoot.querySelector(`#interactor_${buttonField}`).innerHTML = sortIcon;
    }
  });
  // Update sort state.
  State.updateSetting('interactorSortKey', field);
  State.updateSetting('interactorSortDirection', sortDir);
};

const biogridSort = () => {
  sortInteractions('biogrid', 'des', sortArray.lengthByKey);
};

const geneSort = () => {
  sortInteractions('gene', 'asc', sortArray.alphabeticalByKey);
};

const intactSort = () => {
  sortInteractions('intact', 'des', sortArray.lengthByKey);
};

export const removeInteractorSortListener = () => {
  if (State.shadowRoot.querySelector('.interactor-table')) {
    State.shadowRoot.querySelector('#interactor_biogrid').removeEventListener('click', biogridSort);
    State.shadowRoot.querySelector('#interactor_gene').removeEventListener('click', geneSort);
    State.shadowRoot.querySelector('#interactor_intact').removeEventListener('click', intactSort);
  }
};

export const addInteractorSortListener = () => {
  if (State.shadowRoot.querySelector('.interactor-table')) {
    State.shadowRoot.querySelector('#interactor_biogrid').addEventListener('click', biogridSort);
    State.shadowRoot.querySelector('#interactor_gene').addEventListener('click', geneSort);
    State.shadowRoot.querySelector('#interactor_intact').addEventListener('click', intactSort);
  }
};
