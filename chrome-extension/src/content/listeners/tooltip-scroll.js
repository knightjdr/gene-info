import State from '../state';

const position = { x: 0, y: 0 };

const scroll = () => {
  const deltaX = window.pageXOffset - position.x;
  const deltaY = window.pageYOffset - position.y;
  const tooltip = State.shadowRoot.getElementById('tooltip');
  tooltip.style.left = `${tooltip.offsetLeft - deltaX}px`;
  tooltip.style.top = `${tooltip.offsetTop - deltaY}px`;
  position.x = window.pageXOffset;
  position.y = window.pageYOffset;
};

export const removeTooltipScrollListener = () => {
  window.removeEventListener('scroll', scroll);
};

export const addTooltipScrollListener = () => {
  position.x = window.pageXOffset;
  position.y = window.pageYOffset;
  window.addEventListener('scroll', scroll);
};
