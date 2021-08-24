const closeButton = (target) => {
  const button = document.createElement('button');
  button.className = 'action-button';
  button.id = 'close';
  button.type = 'button';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '20');
  svg.setAttribute('width', '20');
  svg.setAttribute('viewBox', '0 0 512 512');

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('fill', '#FAFAFA');
  circle.setAttribute('cx', 256);
  circle.setAttribute('cy', 256);
  circle.setAttribute('r', 160);

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('fill', '#F44336');
  path.setAttribute('d', `M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M377.6,321.1
  c4.7,4.7,4.7,12.301,0,17L338,377.6c-4.7,4.7-12.3,4.7-17,0L256,312l-65.1,65.6c-4.7,4.7-12.3,4.7-17,0L134.4,338
  c-4.7-4.7-4.7-12.3,0-17l65.6-65l-65.6-65.1c-4.7-4.7-4.7-12.3,0-17l39.6-39.6c4.7-4.7,12.3-4.7,17,0l65,65.7l65.1-65.6
  c4.7-4.7,12.301-4.7,17,0L377.7,174c4.7,4.7,4.7,12.3,0,17L312,256L377.6,321.1z`);

  svg.appendChild(circle);
  svg.appendChild(path);

  button.appendChild(svg);

  target.appendChild(button);
};

export default closeButton;
