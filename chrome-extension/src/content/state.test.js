import State from './state';

jest.mock('../config', () => ({
  defaultGoNamespace: 'BP',
  defaultSettingOrder: ['basic', 'links'],
  defaultTissues: {
    'Homo sapiens': ['HEK 293'],
  },
}));

describe('Content state', () => {
  describe('undefined storage settings', () => {
    beforeAll(() => {
      const storage = {};
      State.init(storage);
    });

    describe('after initialization', () => {
      it('should set searchTerm as empty string', () => {
        expect(State.searchTerm).toBe('');
      });
    });

    describe('update state', () => {
      it('should update search term', () => {
        const term = 'test';
        State.setSearchTerm(term);
        expect(State.searchTerm).toBe(term);
      });
    });
  });
});
