export const sortIcon = {
  height: 12,
  tag: 'svg',
  viewBox: '0 0 503 700',
  children: [
    {
      tag: 'path',
      d: `M43.303,407.143h418.359c37.617,0,56.426,45.527,29.883,72.07l-209.18,209.18c-16.523,16.523-43.242,16.523-59.59,0
      L13.42,479.213C-13.123,452.67,5.686,407.143,43.303,407.143z M491.545,222.572l-209.18-209.18
      c-16.523-16.523-43.242-16.523-59.59,0L13.42,222.572c-26.543,26.543-7.734,72.07,29.883,72.07h418.359
      C499.279,294.643,518.088,249.115,491.545,222.572z`,
    },
  ],
};

const createSortIcon = (button) => {
  button.firstChild.remove();
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '12');
  svg.setAttribute('viewBox', '0 0 503 700');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', `M43.303,407.143h418.359c37.617,0,56.426,45.527,29.883,72.07l-209.18,209.18c-16.523,16.523-43.242,16.523-59.59,0
  L13.42,479.213C-13.123,452.67,5.686,407.143,43.303,407.143z M491.545,222.572l-209.18-209.18
  c-16.523-16.523-43.242-16.523-59.59,0L13.42,222.572c-26.543,26.543-7.734,72.07,29.883,72.07h418.359
  C499.279,294.643,518.088,249.115,491.545,222.572z`);

  svg.appendChild(path);

  button.appendChild(svg);
};

export default createSortIcon;
