import pathologyElement from './pathology';

describe('Pathology link', () => {
  it('should show link', () => {
    const report = {
      mim: 123,
    };
    const settings = {
      pathology: true,
    };
    const expected = [{
      database: 'OMIM',
      href: 'https://www.omim.org/entry/123',
    }];
    expect(pathologyElement(report, settings)).toEqual(expected);
  });

  it('should not show link when setting is off', () => {
    const report = {
      mim: 123,
    };
    const settings = {
      pathology: false,
    };
    const expected = [];
    expect(pathologyElement(report, settings)).toEqual(expected);
  });

  it('should not show link when ID is missing', () => {
    const report = {};
    const settings = {
      pathology: true,
    };
    const expected = [];
    expect(pathologyElement(report, settings)).toEqual(expected);
  });
});
