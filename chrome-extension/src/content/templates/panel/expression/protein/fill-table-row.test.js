import fillTableRow from './fill-table-row';

describe('Fill protein expression table row', () => {
  it('should populate table row preferentially from cell data', () => {
    const data = {
      cells: {
        cellX: { intensity: 2, level: 'low' },
      },
      tissues: {
        cellX: { intensity: 2, level: 'low' },
      },
    };
    const tissue = 'cellX';
    const result = fillTableRow(tissue, data);

    const expected = {
      tag: 'tr',
      children: [
        { tag: 'td', textContent: 'cellX' },
        { tag: 'td', textContent: 2 },
        { tag: 'td', textContent: 'low' },
      ],
    };
    expect(result).toEqual(expected);
  });

  describe('cell data not available', () => {
    it('should populate table row from tissue data when specific cell data not available', () => {
      const data = {
        cells: {},
        tissues: {
          cellX: { intensity: 2, level: 'low' },
        },
      };
      const tissue = 'cellX';
      const result = fillTableRow(tissue, data);

      const expected = {
        tag: 'tr',
        children: [
          { tag: 'td', textContent: 'cellX' },
          { tag: 'td', textContent: 2 },
          { tag: 'td', textContent: 'low' },
        ],
      };
      expect(result).toEqual(expected);
    });

    it('should populate table row from tissue data when specific cell data missing', () => {
      const data = {
        tissues: {
          cellX: { intensity: 2, level: 'low' },
        },
      };
      const tissue = 'cellX';
      const result = fillTableRow(tissue, data);

      const expected = {
        tag: 'tr',
        children: [
          { tag: 'td', textContent: 'cellX' },
          { tag: 'td', textContent: 2 },
          { tag: 'td', textContent: 'low' },
        ],
      };
      expect(result).toEqual(expected);
    });
  });

  describe('no data available', () => {
    it('should populate row with placeholders when no data is available', () => {
      const data = {
      };
      const tissue = 'cellX';
      const result = fillTableRow(tissue, data);

      const expected = {
        tag: 'tr',
        children: [
          { tag: 'td', textContent: 'cellX' },
          { tag: 'td', textContent: '-' },
          { tag: 'td', textContent: 'none' },
        ],
      };
      expect(result).toEqual(expected);
    });

    it('should populate row with placeholders when cell line is not available', () => {
      const data = {
        cells: {},
        tissues: {},
      };
      const tissue = 'cellX';
      const result = fillTableRow(tissue, data);

      const expected = {
        tag: 'tr',
        children: [
          { tag: 'td', textContent: 'cellX' },
          { tag: 'td', textContent: '-' },
          { tag: 'td', textContent: 'none' },
        ],
      };
      expect(result).toEqual(expected);
    });
  });
});
