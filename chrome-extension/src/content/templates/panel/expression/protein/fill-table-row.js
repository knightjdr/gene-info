const fillTableRow = (tissue, data) => {
  const datum = (data.cells && data.cells[tissue]) || (data.tissues && data.tissues[tissue]);
  const { intensity, level } = datum || { intensity: '-', level: 'none' };
  return `
    <tr>
      <td>${tissue}</td>
      <td>${intensity}</td>
      <td>${level}</td>
    </tr>
  `;
};

export default fillTableRow;
