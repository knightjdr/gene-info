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

const fillTableRow = tissue => ({
  tag: 'tr',
  children: [
    { tag: 'td', textContent: tissue.name },
    { tag: 'td', textContent: tissue.value },
    { tag: 'td', textContent: defineLevel(tissue.value) },
  ],
});

export default fillTableRow;
