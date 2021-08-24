import createLinkList from './link';
import createNoResultTooltipNodes from './tooltip';

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
    let nodes;

    beforeAll(() => {
      createLinkList.mockReturnValue([]);
      createLinkList.mockClear();
      nodes = createNoResultTooltipNodes(false);
    });

    it('should set theme', () => {
      const node = nodes[1];
      expect(node.class.includes('theme_dark')).toBeTruthy();
    });

    it('should set tooltip text', () => {
      const header = nodes[1].children[0];
      expect(header.textContent.trim()).toBe('No search result');
    });

    it('should call links function', () => {
      const settings = {
        species: 'Homo sapiens',
        theme: 'dark',
      };
      expect(createLinkList).toHaveBeenCalledWith('test', settings);
    });
  });

  describe('error', () => {
    let nodes;

    beforeAll(() => {
      createLinkList.mockReturnValue([]);
      createLinkList.mockClear();
      nodes = createNoResultTooltipNodes(true);
    });

    it('should set tooltip text', () => {
      const header = nodes[1].children[0];
      expect(header.textContent.trim()).toBe('An error occured');
    });

    it('should not call link function', () => {
      expect(createLinkList).not.toHaveBeenCalled();
    });
  });
});
