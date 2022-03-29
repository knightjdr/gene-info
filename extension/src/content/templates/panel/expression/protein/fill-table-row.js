const fillTableRow = tissue => ({
  tag: 'tr',
  children: [
    { tag: 'td', textContent: tissue.name },
    { tag: 'td', textContent: tissue.intensity },
    { tag: 'td', textContent: tissue.level },
  ],
});

export default fillTableRow;
