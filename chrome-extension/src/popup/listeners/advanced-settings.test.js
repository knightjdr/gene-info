import advancedSettings from './advanced-settings';

describe('Advanced settings', () => {
  let button;
  let div;

  beforeAll(() => {
    button = document.createElement('button');
    button.dataset.type = 'toggle_options_test';
    button.type = 'button';
    button.addEventListener('click', advancedSettings);
    document.body.appendChild(button);

    div = document.createElement('div');
    div.id = 'toggle_options_test';
    document.body.appendChild(div);
  });

  it('should display advanced section on click when element has display "none"', () => {
    div.style.display = 'none';
    button.dispatchEvent(new Event('click', {}));
    expect(div.style.display).toBe('block');
  });

  it('should hide advanced section on click when element has display "block"', () => {
    div.style.display = 'block';
    button.dispatchEvent(new Event('click', {}));
    expect(div.style.display).toBe('none');
  });
});
