import fillTableRow from './fill-table-row';
import minifyHTML from '../../../../../test-utils/minify-html';

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
    const result = minifyHTML(fillTableRow(tissue, data));

    const expected = minifyHTML(`<tr>
      <td>cellX</td>
      <td>2</td>
      <td>low</td>
    </tr>`);
    expect(result).toBe(expected);
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
      const result = minifyHTML(fillTableRow(tissue, data));

      const expected = minifyHTML(`<tr>
        <td>cellX</td>
        <td>2</td>
        <td>low</td>
      </tr>`);
      expect(result).toBe(expected);
    });

    it('should populate table row from tissue data when specific cell data missing', () => {
      const data = {
        tissues: {
          cellX: { intensity: 2, level: 'low' },
        },
      };
      const tissue = 'cellX';
      const result = minifyHTML(fillTableRow(tissue, data));

      const expected = minifyHTML(`<tr>
        <td>cellX</td>
        <td>2</td>
        <td>low</td>
      </tr>`);
      expect(result).toBe(expected);
    });
  });

  describe('no data available', () => {
    it('should populate row with placeholders when no data is available', () => {
      const data = {
      };
      const tissue = 'cellX';
      const result = minifyHTML(fillTableRow(tissue, data));

      const expected = minifyHTML(`<tr>
        <td>cellX</td>
        <td>-</td>
        <td>none</td>
      </tr>`);
      expect(result).toBe(expected);
    });

    it('should populate row with placeholders when cell line is not available', () => {
      const data = {
        cells: {},
        tissues: {},
      };
      const tissue = 'cellX';
      const result = minifyHTML(fillTableRow(tissue, data));

      const expected = minifyHTML(`<tr>
        <td>cellX</td>
        <td>-</td>
        <td>none</td>
      </tr>`);
      expect(result).toBe(expected);
    });
  });
});
