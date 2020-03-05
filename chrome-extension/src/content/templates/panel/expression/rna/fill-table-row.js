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
  return {
    tag: 'tr',
    children: [
      { tag: 'td', textContent: tissue },
      { tag: 'td', textContent: tpm },
      { tag: 'td', textContent: defineLevel(tpm) },
    ],
  };
};

export default fillTableRow;
