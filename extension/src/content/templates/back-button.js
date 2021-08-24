const backButton = (target, reports) => {
  if (reports > 1) {
    const button = document.createElement('button');
    button.className = 'action-button';
    button.id = 'back';
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
    path.setAttribute('fill', '#1976D2');
    path.setAttribute('d', `M256,504C119,504,8,393,8,256S119,8,256,8s248,111,248,248S393,504,256,504z M372,212H256v-70.9
    c0-10.7-13-16.1-20.5-8.5L121.2,247.5c-4.7,4.7-4.7,12.2,0,16.9L235.5,379.3c7.6,7.601,20.5,2.2,20.5-8.5V300h116
    c6.6,0,12-5.4,12-12v-64C384,217.4,378.6,212,372,212z`);

    svg.appendChild(circle);
    svg.appendChild(path);

    button.appendChild(svg);

    target.appendChild(button);
  }
};

export default backButton;
