import hasData from './has-data';

describe('Has tissue expression data', () => {
  it('should return true when cell and tissude data is available', () => {
    const expression = {
      cells: {},
      tissues: {},
    };
    expect(hasData(expression)).toBeTruthy();
  });

  it('should return true when cell data is available', () => {
    const expression = {
      cells: {},
    };
    expect(hasData(expression)).toBeTruthy();
  });

  it('should return true when tissue data is available', () => {
    const expression = {
      tissues: {},
    };
    expect(hasData(expression)).toBeTruthy();
  });

  it('should return false when cell and tissude data are not available', () => {
    const expression = {};
    expect(hasData(expression)).toBeFalsy();
  });

  it('should return false when expression data is not available', () => {
    const expression = undefined;
    expect(hasData(expression)).toBeFalsy();
  });
});
