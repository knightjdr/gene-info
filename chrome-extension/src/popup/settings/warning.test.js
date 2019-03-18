import tabQuery from '../helpers/tabs';
import warning, { checkURL } from './warning';

jest.mock('../helpers/tabs');

describe('Check URL', () => {
  beforeAll(() => {
    const div = document.createElement('div');
    div.className = 'warning';
    div.style.display = 'none';
    document.body.appendChild(div);
  });

  it('should display div when tabs is undefined', () => {
    const tabs = undefined;
    checkURL(tabs);
    const div = document.querySelector('.warning');
    expect(div.style.display).toBe('flex');
  });

  it('should display div when first tab entry is undefined', () => {
    const tabs = [];
    checkURL(tabs);
    const div = document.querySelector('.warning');
    expect(div.style.display).toBe('flex');
  });

  it('should display div when url is falsy', () => {
    const tabs = [{ url: '' }];
    checkURL(tabs);
    const div = document.querySelector('.warning');
    expect(div.style.display).toBe('flex');
  });

  it('should display div when url starts with chrome', () => {
    const tabs = [{ url: 'chrome://extenstions' }];
    checkURL(tabs);
    const div = document.querySelector('.warning');
    expect(div.style.display).toBe('flex');
  });

  it('should display div when url starts with about', () => {
    const tabs = [{ url: 'chrome://extenstions' }];
    checkURL(tabs);
    const div = document.querySelector('.warning');
    expect(div.style.display).toBe('flex');
  });

  it('should not display div when url starts with http', () => {
    const tabs = [{ url: 'https://page.org' }];
    checkURL(tabs);
    const div = document.querySelector('.warning');
    expect(div.style.display).toBe('none');
  });
});

describe('Warning', () => {
  it('should call tab query', () => {
    tabQuery.mockClear();
    warning();
    expect(tabQuery).toHaveBeenCalledWith({ active: true, lastFocusedWindow: true }, checkURL);
  });
});
