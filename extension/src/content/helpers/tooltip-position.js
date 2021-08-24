import State from '../state';

const tooltipPosition = (event, tooltip, previousPosition) => {
  let x;
  let y;
  if (previousPosition) {
    x = previousPosition.left.replace('px', '');
    y = previousPosition.top.replace('px', '');
  } else if (event) {
    const divHeight = tooltip.offsetHeight;
    const divWidth = tooltip.offsetWidth;
    const scrollOffset = window.innerWidth > document.documentElement.clientWidth ? 15 : 0;
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    if (event.clientX < 5) {
      x = 5;
    } else if (event.clientX + divWidth > viewportWidth - 5) {
      x = viewportWidth - divWidth - scrollOffset - 5;
    } else {
      x = event.clientX;
    }
    if (event.clientY - divHeight < 5) {
      y = 5;
    } else if (event.clientY > viewportHeight - 5) {
      y = viewportHeight - divHeight - 5;
    } else {
      y = event.clientY - divHeight;
    }
  } else {
    const el = State.shadowRoot.getElementById('tooltip');
    x = el.getBoundingClientRect().left;
    y = el.getBoundingClientRect().top;
  }
  return { x, y };
};

export default tooltipPosition;
