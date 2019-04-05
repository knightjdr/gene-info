import links from './link';
import tooltip from './tooltip';

jest.mock('./link');
jest.mock('../../state', () => ({
  searchTerm: 'test',
  settings: {
    species: 'Homo sapiens',
    theme: 'dark',
  },
}));


describe('No result tooltip', () => {
  describe('No error', () => {
    beforeAll(() => {
      links.mockClear();
      document.body.innerHTML = tooltip(false);
    });

    it('should set theme', () => {
      const div = document.querySelector('aside div');
      expect(div.classList.contains('theme_dark')).toBeTruthy();
    });

    it('should set tooltip text', () => {
      const header = document.querySelector('header');
      expect(header.textContent.trim()).toBe('No search result');
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
      document.body.innerHTML = tooltip(true);
    });

    it('should set panel text', () => {
      const header = document.querySelector('header');
      expect(header.textContent.trim()).toBe('An error occured');
    });

    it('should not call link function', () => {
      expect(links).not.toHaveBeenCalled();
    });
  });
});
