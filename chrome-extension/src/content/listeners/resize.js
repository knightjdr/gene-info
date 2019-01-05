import State from '../state';

let button;
let panel;
let x;

const mouseMove = (event) => {
  const delta = x - event.clientX;
  x = event.clientX;
  panel.style.width = `${panel.offsetWidth + delta}px`;
};

const mouseUp = () => {
  document.removeEventListener('mousemove', mouseMove);
  document.removeEventListener('mouseup', mouseUp);
};

const mouseDown = (event) => {
  x = event.clientX;
  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp);
};

export const removeResizeListener = () => {
  button = State.shadowRoot.getElementById('resize');
  if (button) {
    button.removeEventListener('mousedown', mouseDown);
  }
};

export const addResizeListener = () => {
  button = State.shadowRoot.getElementById('resize');
  if (button) {
    panel = State.shadowRoot.getElementById('panel');
    button.addEventListener('mousedown', mouseDown);
  }
};
