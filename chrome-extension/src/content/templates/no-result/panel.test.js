import links from './link';
import panel from './panel';
import position from '../position';

jest.mock('./link');
jest.mock('../position');
position.mockReturnValue('top: 10px;');
jest.mock('../../state', () => ({
  searchTerm: 'test',
  settings: {
    species: 'Homo sapiens',
    theme: 'dark',
  },
}));


describe('No result panel', () => {
  describe('No error', () => {
    beforeAll(() => {
      links.mockClear();
      document.body.innerHTML = panel(false, {});
    });

    it('should set theme', () => {
      const aside = document.querySelector('aside');
      expect(aside.classList.contains('theme_dark')).toBeTruthy();
    });

    it('should set inline style', () => {
      const aside = document.querySelector('aside');
      expect(aside.style.top).toBe('10px');
    });

    it('should set panel text', () => {
      const par = document.querySelector('p');
      expect(par.textContent.trim()).toBe('No search result');
    });

    it('should call links function', () => {
      const settings = {
        species: 'Homo sapiens',
        theme: 'dark',
      };
      expect(links).toHaveBeenCalledWith('test', settings);
    });
  });

  describe('error', () => {
    beforeAll(() => {
      links.mockClear();
      document.body.innerHTML = panel(true, {});
    });

    it('should set panel text', () => {
      const par = document.querySelector('p');
      expect(par.textContent.trim().startsWith('An error occured')).toBeTruthy();
    });

    it('should not call link function', () => {
      expect(links).not.toHaveBeenCalled();
    });
  });
});
