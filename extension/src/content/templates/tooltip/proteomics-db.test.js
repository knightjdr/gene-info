import proteomicsDBElement from './proteomics-db';

describe('ProteomicsDB link', () => {
  it('should show link', () => {
    const report = {
      proteomicsdb: 1234,
    };
    const settings = {
      protein_expression: true,
    };
    const expected = [{
      database: 'Proteomics DB',
      href: 'https://www.proteomicsdb.org/proteomicsdb/#protein/proteinDetails/1234/summary',
    }];
    expect(proteomicsDBElement(report, settings)).toEqual(expected);
  });

  it('should not show link when setting is off', () => {
    const report = {
      proteomicsdb: 1234,
    };
    const settings = {
      protein_expression: false,
    };
    const expected = [];
    expect(proteomicsDBElement(report, settings)).toEqual(expected);
  });

  it('should not show link when ID is missing', () => {
    const report = {};
    const settings = {
      protein_expression: true,
    };
    const expected = [];
    expect(proteomicsDBElement(report, settings)).toEqual(expected);
  });
});
