import { updateTab } from '../helpers/message';
import settingOrder, { setElementOrder } from './setting-order';

jest.mock('../../config', () => ({
  defaultSettingOrder: ['a', 'b', 'c', 'd'],
}));
jest.mock('../helpers/message');

global.chrome = {
  storage: {
    local: {
      get: jest.fn(),
    },
  },
};

describe('Set element order', () => {
  let container;

  beforeAll(() => {
    container = document.createElement('div');
    container.id = 'settings_drop_container';
    document.body.appendChild(container);
    ['a', 'b', 'c', 'd'].forEach((id) => {
      const child = document.createElement('div');
      child.id = `drag_${id}`;
      container.appendChild(child);
    });
  });

  describe('undefined storage setting order', () => {
    beforeAll(() => {
      updateTab.mockClear();
      const storage = {};
      setElementOrder(storage);
    });

    it('should order elements by default order', () => {
      const expected = ['drag_a', 'drag_b', 'drag_c', 'drag_d'];
      const children = Array.from(container.children);
      expect(children.map(child => child.id)).toEqual(expected);
    });

    it('should update tab', () => {
      const order = ['a', 'b', 'c', 'd'];
      expect(updateTab).toHaveBeenCalledWith('updateSetting', 'setting_order', order);
    });
  });

  describe('empty storage setting order', () => {
    beforeAll(() => {
      updateTab.mockClear();
      const storage = { setting_order: [] };
      setElementOrder(storage);
    });

    it('should order elements by default order', () => {
      const expected = ['drag_a', 'drag_b', 'drag_c', 'drag_d'];
      const children = Array.from(container.children);
      expect(children.map(child => child.id)).toEqual(expected);
    });

    it('should update tab', () => {
      const order = ['a', 'b', 'c', 'd'];
      expect(updateTab).toHaveBeenCalledWith('updateSetting', 'setting_order', order);
    });
  });

  describe('storage setting order matches available settings', () => {
    beforeAll(() => {
      updateTab.mockClear();
      const storage = { setting_order: ['a', 'b', 'd', 'c'] };
      setElementOrder(storage);
    });

    it('should order elements by user settings', () => {
      const expected = ['drag_a', 'drag_b', 'drag_d', 'drag_c'];
      const children = Array.from(container.children);
      expect(children.map(child => child.id)).toEqual(expected);
    });

    it('should not update tab', () => {
      expect(updateTab).not.toHaveBeenCalled();
    });
  });

  describe('storage setting order has unavailable settings', () => {
    beforeAll(() => {
      updateTab.mockClear();
      const storage = { setting_order: ['a', 'b', 'e', 'd', 'c', 'f'] };
      setElementOrder(storage);
    });

    it('should only include available elements', () => {
      const expected = ['drag_a', 'drag_b', 'drag_d', 'drag_c'];
      const children = Array.from(container.children);
      expect(children.map(child => child.id)).toEqual(expected);
    });

    it('should update tab', () => {
      const order = ['a', 'b', 'd', 'c'];
      expect(updateTab).toHaveBeenCalledWith('updateSetting', 'setting_order', order);
    });
  });

  describe('storage setting is missing available settings', () => {
    beforeAll(() => {
      updateTab.mockClear();
      const storage = { setting_order: ['a', 'd', 'c'] };
      setElementOrder(storage);
    });

    it('should place missing element last in container', () => {
      const expected = ['drag_a', 'drag_d', 'drag_c', 'drag_b'];
      const children = Array.from(container.children);
      expect(children.map(child => child.id)).toEqual(expected);
    });

    it('should update tab', () => {
      const order = ['a', 'd', 'c', 'b'];
      expect(updateTab).toHaveBeenCalledWith('updateSetting', 'setting_order', order);
    });
  });
});

describe('Setting order', () => {
  it('should call chrome api getter', () => {
    chrome.storage.local.get.mockClear();
    settingOrder();
    expect(chrome.storage.local.get).toHaveBeenCalledWith('setting_order', setElementOrder);
  });
});
