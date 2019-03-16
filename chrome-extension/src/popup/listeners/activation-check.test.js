import activationCheck from './activation-check';
import updateTab from './update-tab';

jest.mock('./update-tab');

global.chrome = {
  storage: {
    local: {
      set: jest.fn(),
    },
  },
};

describe('Activation check', () => {
  beforeAll(() => {
    ['click', 'drag', 'disable'].forEach((type) => {
      const input = document.createElement('input');
      input.dataset.type = type;
      input.id = `activate_${type}`;
      input.type = 'checkbox';
      input.setAttribute('checked', false);
      input.addEventListener('click', activationCheck);
      document.body.appendChild(input);
    });
    document.getElementById('activate_disable').dispatchEvent(new Event('click', {}));
  });

  it('should set checked attribute on clicked element to true', () => {
    expect(document.getElementById('activate_disable').checked).toBeTruthy();
  });

  it('should set storage value', () => {
    expect(chrome.storage.local.set).toHaveBeenCalledWith({ activate: 'disable' });
  });

  it('should update tab', () => {
    expect(updateTab).toHaveBeenCalledWith('updateSetting', 'activate', 'disable');
  });

  it('should set checked attribute on "click" element to false', () => {
    expect(document.getElementById('activate_click').checked).toBeFalsy();
  });

  it('should set checked attribute on "drag" element to false', () => {
    expect(document.getElementById('activate_drag').checked).toBeFalsy();
  });
});
