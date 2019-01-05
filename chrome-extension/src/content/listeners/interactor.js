/* eslint no-param-reassign: 0 */

import State from '../state';

function toggleList() {
  const { gene } = this.dataset;
  const lists = State.shadowRoot.querySelectorAll(`.interactor-list-${gene}`);
  const value = !lists[0].style.display || lists[0].style.display === 'none'
    ? 'inline-block' : 'none';
  lists.forEach((list) => {
    list.style.display = value;
  });
}

export const removeInteractorListener = () => {
  if (State.shadowRoot.querySelectorAll('.interactor-list-toggle').length > 0) {
    State.shadowRoot.querySelectorAll('.interactor-list-toggle').forEach((el) => {
      el.removeEventListener('click', toggleList);
    });
  }
};

export const addInteractorListener = () => {
  if (State.shadowRoot.querySelectorAll('.interactor-list-toggle').length > 0) {
    State.shadowRoot.querySelectorAll('.interactor-list-toggle').forEach((el) => {
      el.addEventListener('click', toggleList);
    });
  }
};
