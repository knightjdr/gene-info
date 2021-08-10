import storageGet from '../helpers/storage';
import * as inputs from './inputs';

jest.mock('../../config', () => ({
  defaultInputs: {
    a: 5,
    b: 10,
  },
}));
jest.mock('../helpers/storage');

describe('Update input value', () => {
  beforeAll(() => {
    document.body.innerHTML = '';
    const input = document.createElement('input');
    input.id = 'input';
    document.body.appendChild(input);
  });

  it('should set value from default when no value in storage', () => {
    const input = document.getElementById('input');
    input.value = 0;

    const defaultValue = 5;
    const storageValue = undefined;
    inputs.setInput('input', storageValue, defaultValue);

    const expected = '5';
    expect(input.value).toBe(expected);
  });

  it('should set value from storage', () => {
    const input = document.getElementById('input');
    input.value = 0;

    const defaultValue = 5;
    const storageValue = 10;
    inputs.setInput('input', storageValue, defaultValue);

    const expected = '10';
    expect(input.value).toBe(expected);
  });
});

describe('Iterate over inputs', () => {
  beforeAll(() => {
    storageGet.mockClear();
    inputs.inputs();
  });

  it('should call storageGet with default value', () => {
    const tests = [
      { inputID: 'a', value: 5 },
      { inputID: 'b', value: 10 },
    ];
    tests.forEach((option) => {
      expect(storageGet).toHaveBeenCalledWith(
        option.inputID,
        inputs.setInput,
        option.value,
      );
    });
  });
});
