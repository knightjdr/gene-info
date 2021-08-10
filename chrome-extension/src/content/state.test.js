import State, { defaultFalseToggleState, defaultTrueToggleState } from './state';

jest.mock('../config', () => ({
  defaultGoNamespace: 'BP',
  defaultInputs: {
    essentiality_codependencies: 5,
  },
  defaultSettingOrder: ['basic', 'links'],
  defaultTissues: {
    essentiality: {
      'Homo sapiens': ['JURKAT'],
    },
    protein: {
      'Homo sapiens': ['HEK 293'],
    },
    rna: {
      'Homo sapiens': ['HEK 293'],
    },
  },
}));

describe('Toggle state for settings with default "off" state', () => {
  it('should return true for truthy values', () => {
    const settings = [true, 'a', 1];
    settings.forEach((setting) => {
      expect(defaultFalseToggleState(setting)).toBeTruthy();
    });
  });

  it('should return false for falsy values', () => {
    const settings = [false, '', undefined, null];
    settings.forEach((setting) => {
      expect(defaultFalseToggleState(setting)).toBeFalsy();
    });
  });
});

describe('Toggle state for settings with default "on" state', () => {
  it('should return true for truthy values and undefined', () => {
    const settings = [true, 'a', 1, undefined];
    settings.forEach((setting) => {
      expect(defaultTrueToggleState(setting)).toBeTruthy();
    });
  });

  it('should return false for falsy values but not undefined', () => {
    const settings = [false, '', null];
    settings.forEach((setting) => {
      expect(defaultTrueToggleState(setting)).toBeFalsy();
    });
  });
});

describe('Content state', () => {
  describe('undefined storage settings', () => {
    beforeAll(() => {
      const storage = {};
      State.init(storage);
    });

    describe('after initialization', () => {
      it('should set pathology setting to true', () => {
        expect(State.settings.pathology).toBeTruthy();
      });

      it('should set pathway setting to true', () => {
        expect(State.settings.pathway).toBeTruthy();
      });

      it('should set searchTerm as empty string', () => {
        expect(State.searchTerm).toBe('');
      });
    });

    describe('update state', () => {
      it('should update settings', () => {
        State.updateSetting('pathway', false);
        expect(State.settings.pathway).toBeFalsy();
      });

      it('should update search term', () => {
        const term = 'test';
        State.setSearchTerm(term);
        expect(State.searchTerm).toBe(term);
      });
    });
  });

  describe('defined storage settings', () => {
    beforeAll(() => {
      const storage = {
        pathology: false,
        pathway: false,
      };
      State.init(storage);
    });

    describe('after initialization', () => {
      it('should set pathology setting to false', () => {
        expect(State.settings.pathology).toBeFalsy();
      });

      it('should set pathway setting to false', () => {
        expect(State.settings.pathway).toBeFalsy();
      });
    });
  });
});
