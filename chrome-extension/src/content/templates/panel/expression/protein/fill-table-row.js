const fillTableRow = (tissue, data) => {
  const datum = (data.cells && data.cells[tissue]) || (data.tissues && data.tissues[tissue]);
  const { intensity, level } = datum || { intensity: '-', level: 'none' };
  return {
    tag: 'tr',
    children: [
      { tag: 'td', textContent: tissue },
      { tag: 'td', textContent: intensity },
      { tag: 'td', textContent: level },
    ],
  };
};

export default fillTableRow;
