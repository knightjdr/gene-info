const createSortDownIcon = (button) => {
  button.firstChild.remove();
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '12');
  svg.setAttribute('viewBox', '0 0 503 700');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', `M43.302,409.357h418.36c37.617,0,56.426,45.527,29.883,72.07l-209.18,209.18c-16.523,16.523-43.243,16.523-59.59,0
  L13.419,481.428C-13.124,454.885,5.685,409.357,43.302,409.357z`);

  svg.appendChild(path);

  button.appendChild(svg);
};

export default createSortDownIcon;
