import tabQuery from '../helpers/tabs';
import warning, { checkURL } from './warning';

jest.mock('../helpers/tabs');

describe('Check URL', () => {
  beforeAll(() => {
    const div = document.createElement('div');
    div.className = 'warning';
    div.style.display = 'none';
    document.body.appendChild(div);
    const button = document.createElement('button');
    button.id = 'button_search';
    document.body.appendChild(button);
    const input = document.createElement('input');
    input.id = 'input_search';
    document.body.appendChild(input);
  });

  describe('tabs arg is undefined', () => {
    beforeAll(() => {
      const tabs = undefined;
      checkURL(tabs);
    });

    it('should display div', () => {
      const div = document.querySelector('.warning');
      expect(div.style.display).toBe('flex');
    });

    it('should disable button', () => {
      const button = document.getElementById('button_search');
      expect(button.disabled).toBeTruthy();
    });

    it('should disable input', () => {
      const input = document.getElementById('input_search');
      expect(input.disabled).toBeTruthy();
    });
  });

  describe('first tab entry is undefined', () => {
    beforeAll(() => {
      const tabs = [];
      checkURL(tabs);
    });

    it('should display div', () => {
      const div = document.querySelector('.warning');
      expect(div.style.display).toBe('flex');
    });

    it('should disable button', () => {
      const button = document.getElementById('button_search');
      expect(button.disabled).toBeTruthy();
    });

    it('should disable input', () => {
      const input = document.getElementById('input_search');
      expect(input.disabled).toBeTruthy();
    });
  });

  describe('tab url is falsy', () => {
    beforeAll(() => {
      const tabs = [{ url: '' }];
      checkURL(tabs);
    });

    it('should display div', () => {
      const div = document.querySelector('.warning');
      expect(div.style.display).toBe('flex');
    });

    it('should disable button', () => {
      const button = document.getElementById('button_search');
      expect(button.disabled).toBeTruthy();
    });

    it('should disable input', () => {
      const input = document.getElementById('input_search');
      expect(input.disabled).toBeTruthy();
    });
  });

  describe('url starts with chrome', () => {
    beforeAll(() => {
      const tabs = [{ url: 'chrome://extenstions' }];
      checkURL(tabs);
    });

    it('should display div', () => {
      const div = document.querySelector('.warning');
      expect(div.style.display).toBe('flex');
    });

    it('should disable button', () => {
      const button = document.getElementById('button_search');
      expect(button.disabled).toBeTruthy();
    });

    it('should disable input', () => {
      const input = document.getElementById('input_search');
      expect(input.disabled).toBeTruthy();
    });
  });

  describe('url starts with about', () => {
    beforeAll(() => {
      const tabs = [{ url: 'about:settings' }];
      checkURL(tabs);
    });

    it('should display div', () => {
      const div = document.querySelector('.warning');
      expect(div.style.display).toBe('flex');
    });

    it('should disable button', () => {
      const button = document.getElementById('button_search');
      expect(button.disabled).toBeTruthy();
    });

    it('should disable input', () => {
      const input = document.getElementById('input_search');
      expect(input.disabled).toBeTruthy();
    });
  });

  describe('url starts with http', () => {
    beforeAll(() => {
      const tabs = [{ url: 'https://page.org' }];
      checkURL(tabs);
    });

    it('should not display div', () => {
      const div = document.querySelector('.warning');
      expect(div.style.display).toBe('none');
    });

    it('should not disable button', () => {
      const button = document.getElementById('button_search');
      expect(button.disabled).toBeFalsy();
    });

    it('should not disable input', () => {
      const input = document.getElementById('input_search');
      expect(input.disabled).toBeFalsy();
    });
  });
});

describe('Warning', () => {
  it('should call tab query', () => {
    tabQuery.mockClear();
    warning();
    expect(tabQuery).toHaveBeenCalledWith({ active: true, lastFocusedWindow: true }, checkURL);
  });
});
