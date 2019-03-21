import onChange from './on-change';
import { updateTab } from '../helpers/message';

jest.mock('../helpers/message');

global.chrome = {
  storage: {
    local: {
      set: jest.fn(),
    },
  },
};

describe('On change', () => {
  beforeAll(() => {
    const select = document.createElement('select');
    select.dataset.type = 'test';
    select.id = 'test_select';
    select.value = 'test-value';
    select.addEventListener('change', onChange);
    document.body.appendChild(select);
    const option = document.createElement('option');
    option.value = 'test-value';
    select.appendChild(option);
    chrome.storage.local.set.mockClear();
    document.getElementById('test_select').dispatchEvent(new Event('change'));
  });

  it('should set storage value', () => {
    expect(chrome.storage.local.set).toHaveBeenCalledWith({ test: 'test-value' });
  });

  it('should update tab', () => {
    expect(updateTab).toHaveBeenCalledWith('updateSetting', 'test', 'test-value');
  });
});
