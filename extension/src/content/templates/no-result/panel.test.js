import createLinkList from './link';
import panel from './panel';
import position from '../position';
import State from '../../state';

jest.mock('./link');
jest.mock('../position');
position.mockReturnValue('top: 10px;');
jest.mock('../../state', () => ({
  searchTerm: 'test',
  settings: {
    ctrl: false,
    species: 'Homo sapiens',
    theme: 'dark',
  },
}));


describe('No result panel', () => {
  describe('no error', () => {
    describe('ctrl requirement not set', () => {
      let nodes;

      beforeAll(() => {
        createLinkList.mockClear();
        nodes = panel(false, {});
      });

      it('should set theme', () => {
        const aside = nodes[1];
        expect(aside.class.includes('theme_dark')).toBeTruthy();
      });

      it('should set inline style', () => {
        const aside = nodes[1];

        const expected = 'top: 10px;';
        expect(aside.style).toBe(expected);
      });

      it('should call links function', () => {
        const settings = {
          ctrl: false,
          species: 'Homo sapiens',
          theme: 'dark',
        };
        expect(createLinkList).toHaveBeenCalledWith('test', settings);
      });

      it('should add ctrl-notification div', () => {
        expect(nodes[1].children[5].class).toBe('ctrl-notification');
      });
    });

    describe('ctrl requirement set', () => {
      let nodes;

      beforeAll(() => {
        State.settings.ctrl = true;
        nodes = panel(false, {});
      });

      it('should not add ctrl-notification div', () => {
        expect(nodes[1].children[5]).toBeNull();
      });
    });
  });

  describe('error', () => {
    let nodes;

    beforeAll(() => {
      createLinkList.mockClear();
      nodes = panel(true, {});
    });

    it('should set panel text', () => {
      const element = nodes[1].children[0].children[0];
      expect(element.textContent.trim().startsWith('An error occured')).toBeTruthy();
    });

    it('should not call link function', () => {
      expect(createLinkList).not.toHaveBeenCalled();
    });
  });
});
