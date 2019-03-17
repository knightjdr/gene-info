import storageGet from '../helpers/storage';
import * as toggles from './toggles';

jest.mock('../../config', () => ({
  defaultCheckedOptions: ['a', 'b'],
  defaultUncheckedOptions: ['c', 'd'],
}));
jest.mock('../helpers/storage');

const timeout = ms => (
  new Promise(resolve => setTimeout(resolve, ms))
);

describe('Set transition duration on label', () => {
  beforeAll(() => {
    document.body.innerHTML = '';
    const div = document.createElement('div');
    document.body.appendChild(div);
    const input = document.createElement('input');
    div.appendChild(input);
    const label = document.createElement('label');
    label.style.transitionDuration = '0s';
    div.appendChild(label);
  });

  it('should set transition duration on the input label', async (done) => {
    const input = document.querySelector('input');
    toggles.setTransitionDuration(input);
    await timeout(100);
    const label = document.querySelector('label');
    expect(label.style.transitionDuration).toBe('0.2s');
    done();
  });
});

describe('Toggle checked attribute', () => {
  beforeAll(() => {
    document.body.innerHTML = '';
    const input = document.createElement('input');
    input.id = 'toggle';
    document.body.appendChild(input);
  });

  it('should set checked attribute when storage value is true', () => {
    const toggle = document.getElementById('toggle');
    toggle.checked = false;
    toggles.setChecked('toggle', true, false, jest.fn());
    expect(toggle.checked).toBeTruthy();
  });


  it('should unset checked attribute when storage value is false', () => {
    const toggle = document.getElementById('toggle');
    toggle.checked = true;
    toggles.setChecked('toggle', false, false, jest.fn());
    expect(toggle.checked).toBeFalsy();
  });

  describe('undefined storage value is treated as true', () => {
    it('should set checked attribute when storage value is undefined', () => {
      const toggle = document.getElementById('toggle');
      toggle.checked = false;
      toggles.setChecked('toggle', undefined, true, jest.fn());
      expect(toggle.checked).toBeTruthy();
    });
  });

  describe('undefined storage value is not treated as true', () => {
    it('should unset checked attribute when storage value is undefined', () => {
      const toggle = document.getElementById('toggle');
      toggle.checked = true;
      toggles.setChecked('toggle', undefined, false, jest.fn());
      expect(toggle.checked).toBeFalsy();
    });
  });

  describe('set transition duration', () => {
    let setTransitionDuration;

    beforeAll(() => {
      setTransitionDuration = jest.fn();
      toggles.setChecked('toggle', true, false, setTransitionDuration);
    });

    it('should call setTransitionDuration', () => {
      const toggle = document.getElementById('toggle');
      expect(setTransitionDuration).toHaveBeenCalledWith(toggle);
    });
  });
});

describe('Interate over toggles', () => {
  beforeAll(() => {
    storageGet.mockClear();
    toggles.toggles();
  });

  it('should call storageGet with final argument "true" for default checked options', () => {
    const options = ['a', 'b'];
    options.forEach((option) => {
      expect(storageGet).toHaveBeenCalledWith(
        option,
        toggles.setChecked,
        true,
        toggles.setTransitionDuration,
      );
    });
  });

  it('should call storageGet with final argument "false" for default unchecked options', () => {
    const options = ['c', 'd'];
    options.forEach((option) => {
      expect(storageGet).toHaveBeenCalledWith(
        option,
        toggles.setChecked,
        false,
        toggles.setTransitionDuration,
      );
    });
  });
});
