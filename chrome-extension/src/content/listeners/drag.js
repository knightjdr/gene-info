/* eslint no-param-reassign: 0 */

let el;
let startX;

const mouseMove = (event) => {
  el.style.cursor = 'ew-resize';
  el.style.userSelect = 'none';
  const delta = startX - event.screenX;
  startX = event.screenX;
  const right = document.documentElement.clientWidth - el.getBoundingClientRect().right;
  el.style.right = `${right + delta}px`;
};

const mouseUp = () => {
  el.style.cursor = 'auto';
  el.style.userSelect = 'auto';
  document.removeEventListener('mousemove', mouseMove);
  document.removeEventListener('mouseup', mouseUp);
};

const mouseDown = (event) => {
  startX = event.screenX;
  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp);
};

export const removeDragListener = () => {
  el = document.getElementById('gene-info__panel');
  if (el) {
    el.removeEventListener('mousemove', mouseDown);
  }
};

export const addDragListener = () => {
  el = document.getElementById('gene-info__panel');
  if (el) {
    el.addEventListener('mousedown', mouseDown);
  }
};
