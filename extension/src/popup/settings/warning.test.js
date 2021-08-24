import { activeTab } from '../helpers/message';
import warning from './warning';

jest.mock('../helpers/message');

const sleep = ms => (
  new Promise(resolve => setTimeout(resolve, ms))
);

describe('Warning', () => {
  describe('tab has injected content script', () => {
    beforeAll(async () => {
      // Setup elements
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

      activeTab.mockResolvedValue(true);
      warning();
      await sleep(200);
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

  describe('tab does not have injected content script', () => {
    beforeAll(async () => {
      // Setup elements
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

      activeTab.mockResolvedValue(undefined);
      warning();
      await sleep(200);
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
});
