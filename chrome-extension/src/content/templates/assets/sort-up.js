const createSortUpIcon = (button) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '12');
  svg.setAttribute('viewBox', '0 0 503 700');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', `M461.662,293.643H43.303c-37.617,0-56.426-45.527-29.883-72.07L222.6,12.393c16.523-16.523,43.242-16.523,59.59,0
  l209.18,209.18C518.088,248.115,499.279,293.643,461.662,293.643z`);

  svg.appendChild(path);

  button.appendChild(svg);
};

export default createSortUpIcon;
