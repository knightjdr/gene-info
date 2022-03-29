import fillTableRow from './fill-table-row';

describe('Fill protein expression table row', () => {
  it('should populate table row', () => {
    const tissue = {
      name: 'cellX',
      intensity: 2,
      level: 'low',
    };
    const result = fillTableRow(tissue);

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
