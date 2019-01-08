/* eslint no-param-reassign: 0 */
import State from '../state';

let button;
let panel;
let x;

const rightPosition = () => (
  document.documentElement.clientWidth - panel.getBoundingClientRect().right
);

const mouseMove = (event) => {
  const delta = x - event.clientX;
  x = event.clientX;
  const right = rightPosition();
  const position = `${right + delta}px`;
  const css = `left: auto; right: ${position}`;
  panel.style.cssText += `;${css}`;
  State.updateStyle('right', position);
};

const mouseUp = () => {
  button.style.cursor = 'cursor';
  panel.style.cursor = 'auto';
  panel.style.userSelect = 'auto';
  document.removeEventListener('mousemove', mouseMove);
  document.removeEventListener('mouseup', mouseUp);
};

const mouseDown = (event) => {
  State.updateStyle('left', '');
  button.style.cursor = 'ew-resize';
  const css = `cursor: ew-resize; left: auto; right: ${rightPosition()}px`;
  panel.style.cssText += `;${css}`;
  panel.style.userSelect = 'none';
  x = event.clientX;
  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp);
};

export const removeDragListener = () => {
  button = State.shadowRoot.getElementById('drag');
  if (button) {
    button.removeEventListener('mousedown', mouseDown);
  }
};

export const addDragListener = () => {
  button = State.shadowRoot.getElementById('drag');
  if (button) {
    panel = State.shadowRoot.getElementById('panel');
    button.addEventListener('mousedown', mouseDown);
  }
};
