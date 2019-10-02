import config from '../../../../../config';

const thresholds = config.expressionThresholds;

export const defineLevel = (value) => {
  if (
    value === '-'
    || value < thresholds.none[1]
  ) {
    return 'none';
  } if (
    value >= thresholds.low[0]
    && value < thresholds.low[1]
  ) {
    return 'low';
  } if (
    value >= thresholds.medium[0]
    && value < thresholds.medium[1]
  ) {
    return 'medium';
  }
  return 'high';
};

const fillTableRow = (tissue, data) => {
  let tpm = (data.cells && data.cells[tissue]) || (data.tissues && data.tissues[tissue]);
  tpm = tpm || '-';
  return `
    <tr>
      <td>${tissue}</td>
      <td>${tpm}</td>
      <td>${defineLevel(tpm)}</td>
    </tr>
  `;
};

export default fillTableRow;
