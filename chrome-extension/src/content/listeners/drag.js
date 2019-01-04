/* eslint no-param-reassign: 0 */

let button;
let startX;
let panel;

const mouseMove = (event) => {
  const delta = startX - event.screenX;
  startX = event.screenX;
  const right = document.documentElement.clientWidth - panel.getBoundingClientRect().right;
  panel.style.right = `${right + delta}px`;
};

const mouseUp = () => {
  button.style.cursor = 'cursor';
  panel.style.cursor = 'auto';
  panel.style.userSelect = 'auto';
  document.removeEventListener('mousemove', mouseMove);
  document.removeEventListener('mouseup', mouseUp);
};

const mouseDown = (event) => {
  button.style.cursor = 'ew-resize';
  panel.style.cursor = 'ew-resize';
  panel.style.userSelect = 'none';
  startX = event.screenX;
  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp);
};

export const removeDragListener = () => {
  button = document.getElementById('gene-info__panel-drag');
  if (button) {
    button.removeEventListener('mousemove', mouseDown);
  }
};

export const addDragListener = () => {
  button = document.getElementById('gene-info__panel-drag');
  panel = document.getElementById('gene-info__panel');
  if (button) {
    button.addEventListener('mousedown', mouseDown);
  }
};
