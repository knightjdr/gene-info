import fillTableRow, { defineLevel } from './fill-table-row';

jest.mock('../../../../../config', () => ({
  expressionThresholds: {
    none: [0, 1],
    low: [1, 10],
    medium: [10, 50],
    high: [50],
  },
}));

describe('Define RNA expression level', () => {
  describe('no expression', () => {
    it('should return "none" when TPM is missing', () => {
      const tpm = '-';
      expect(defineLevel(tpm)).toBe('none');
    });

    it('should return "none" when TPM is less then first threshold', () => {
      const tpm = 0.99;
      expect(defineLevel(tpm)).toBe('none');
    });
  });

  describe('low expression', () => {
    it('should return "low" when TPM is between first and second thresholds', () => {
      const tpm = 1;
      expect(defineLevel(tpm)).toBe('low');
    });

    it('should return "low" when TPM is between first and second thresholds', () => {
      const tpm = 9.99;
      expect(defineLevel(tpm)).toBe('low');
    });
  });

  describe('medium expression', () => {
    it('should return "medium" when TPM is between second and third thresholds', () => {
      const tpm = 10;
      expect(defineLevel(tpm)).toBe('medium');
    });

    it('should return "medium" when TPM is between second and third thresholds', () => {
      const tpm = 49.99;
      expect(defineLevel(tpm)).toBe('medium');
    });
  });

  describe('high expression', () => {
    it('should return "high" when TPM is at third threshold', () => {
      const tpm = 50;
      expect(defineLevel(tpm)).toBe('high');
    });

    it('should return "high" when TPM is beyond third threshold', () => {
      const tpm = 1000;
      expect(defineLevel(tpm)).toBe('high');
    });
  });
});

describe('Fill RNA expression table row', () => {
  it('should populate table row', () => {
    const tissue = { name: 'cellX', value: 5 };
    const result = fillTableRow(tissue);

    const expected = {
      tag: 'tr',
      children: [
        { tag: 'td', textContent: 'cellX' },
        { tag: 'td', textContent: 5 },
        { tag: 'td', textContent: 'low' },
      ],
    };
    expect(result).toEqual(expected);
  });
});
