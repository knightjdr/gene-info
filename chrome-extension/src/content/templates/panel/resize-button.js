const resizeButton = (target) => {
  const button = document.createElement('button');
  button.className = 'action-button';
  button.id = 'resize';
  button.type = 'button';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '20');
  svg.setAttribute('width', '20');
  svg.setAttribute('viewBox', '0 0 512 501.16');

  const pathA = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathA.setAttribute('d', `M341.611,374.104c29.971,0,54.281,24.311,54.281,54.279c0,29.971-24.311,54.281-54.281,54.281
  c-30.001,0-54.312-24.311-54.312-54.281C287.3,398.414,311.61,374.104,341.611,374.104z`);

  const pathB = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathB.setAttribute('d', `M205.864,238.355c29.986,0,54.281,24.311,54.281,54.28c0,30.002-24.295,54.312-54.281,54.312
  c-29.985,0-54.28-24.311-54.28-54.312C151.583,262.666,175.878,238.355,205.864,238.355z`);

  const pathC = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathC.setAttribute('d', `M205.864,374.104c29.986,0,54.281,24.311,54.281,54.279c0,29.971-24.295,54.281-54.281,54.281
  c-29.985,0-54.28-24.311-54.28-54.281C151.583,398.414,175.878,374.104,205.864,374.104z`);

  const pathD = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathD.setAttribute('d', `M70.116,102.623c29.986,0,54.296,24.294,54.296,54.28c0,29.97-24.31,54.281-54.296,54.281
  c-29.97,0-54.28-24.311-54.28-54.281C15.836,126.917,40.146,102.623,70.116,102.623z`);

  const pathE = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathE.setAttribute('d', `M70.116,238.355c29.986,0,54.296,24.311,54.296,54.28c0,30.002-24.31,54.312-54.296,54.312
  c-29.97,0-54.28-24.311-54.28-54.312C15.836,262.666,40.146,238.355,70.116,238.355z`);

  const pathF = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathF.setAttribute('d', `M70.116,374.104c29.986,0,54.296,24.311,54.296,54.279c0,29.971-24.31,54.281-54.296,54.281
  c-29.97,0-54.28-24.311-54.28-54.281C15.836,398.414,40.146,374.104,70.116,374.104z`);

  svg.appendChild(pathA);
  svg.appendChild(pathB);
  svg.appendChild(pathC);
  svg.appendChild(pathD);
  svg.appendChild(pathE);
  svg.appendChild(pathF);

  button.appendChild(svg);

  target.appendChild(button);
};

export default resizeButton;
