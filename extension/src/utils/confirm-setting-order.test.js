import confirmOrder from './confirm-setting-order';

describe('Confirm order', () => {
  describe('undefined stored setting order', () => {
    let result;

    beforeAll(() => {
      const defaultSettings = ['a', 'b', 'c', 'd'];
      const userSettings = undefined;
      result = confirmOrder(userSettings, defaultSettings);
    });

    it('should return default setting order', () => {
      const expected = ['a', 'b', 'c', 'd'];
      expect(result.order).toEqual(expected);
    });

    it('should prompt for update', () => {
      expect(result.shouldUpdate).toBeTruthy();
    });
  });

  describe('empty stored setting order', () => {
    let result;

    beforeAll(() => {
      const defaultSettings = ['a', 'b', 'c', 'd'];
      const userSettings = [];
      result = confirmOrder(userSettings, defaultSettings);
    });

    it('should return default setting order', () => {
      const expected = ['a', 'b', 'c', 'd'];
      expect(result.order).toEqual(expected);
    });

    it('should prompt for update', () => {
      expect(result.shouldUpdate).toBeTruthy();
    });
  });

  describe('stored setting order matches available settings', () => {
    let result;

    beforeAll(() => {
      const defaultSettings = ['a', 'b', 'c', 'd'];
      const userSettings = ['a', 'b', 'd', 'c'];
      result = confirmOrder(userSettings, defaultSettings);
    });

    it('should return stored setting order', () => {
      const expected = ['a', 'b', 'd', 'c'];
      expect(result.order).toEqual(expected);
    });

    it('should not prompt for update', () => {
      expect(result.shouldUpdate).toBeFalsy();
    });
  });

  describe('unavailable stored settings', () => {
    let result;

    beforeAll(() => {
      const defaultSettings = ['a', 'b', 'c', 'd'];
      const userSettings = ['a', 'b', 'e', 'd', 'c', 'f'];
      result = confirmOrder(userSettings, defaultSettings);
    });

    it('should remove unavailable settings', () => {
      const expected = ['a', 'b', 'd', 'c'];
      expect(result.order).toEqual(expected);
    });

    it('should prompt for update', () => {
      expect(result.shouldUpdate).toBeTruthy();
    });
  });

  describe('missing available settings', () => {
    let result;

    beforeAll(() => {
      const defaultSettings = ['a', 'b', 'c', 'd', 'e'];
      const userSettings = ['a', 'b', 'd', 'c'];
      result = confirmOrder(userSettings, defaultSettings);
    });

    it('should add missing settings', () => {
      const expected = ['a', 'b', 'd', 'c', 'e'];
      expect(result.order).toEqual(expected);
    });

    it('should prompt for update', () => {
      expect(result.shouldUpdate).toBeTruthy();
    });
  });
});
