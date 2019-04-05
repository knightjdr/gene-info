import position from './position';

const parseStyle = (str) => {
  const arr = str.split(';').map(property => property.trim());
  arr.pop();
  return arr.reduce((accum, style) => {
    const value = style.split(':').map(item => item.trim());
    return {
      ...accum,
      [value[0]]: value[1],
    };
  }, {});
};

describe('Element position', () => {
  describe('no style in state', () => {
    let style;

    beforeAll(() => {
      const state = {};
      style = position(state);
    });

    it('should return empty style', () => {
      const expected = '';
      expect(style).toBe(expected);
    });
  });

  describe('right position in state', () => {
    let style;

    beforeAll(() => {
      const state = {
        right: '10px',
      };
      style = parseStyle(position(state));
    });

    it('should return left position auto', () => {
      const expected = 'auto';
      expect(style.left).toBe(expected);
    });

    it('should return right position', () => {
      const expected = '10px';
      expect(style.right).toBe(expected);
    });
  });

  describe('left position in state', () => {
    let style;

    beforeAll(() => {
      const state = {
        left: '10px',
      };
      style = parseStyle(position(state));
    });

    it('should return left position', () => {
      const expected = '10px';
      expect(style.left).toBe(expected);
    });

    it('should return right position auto', () => {
      const expected = 'auto';
      expect(style.right).toBe(expected);
    });
  });

  describe('width', () => {
    describe('element is panel', () => {
      let style;

      beforeAll(() => {
        const state = {
          width: '10px',
        };
        style = parseStyle(position(state));
      });

      it('should declare width', () => {
        const expected = '10px';
        expect(style.width).toBe(expected);
      });
    });

    describe('element is not panel', () => {
      let style;

      beforeAll(() => {
        const state = {
          width: '10px',
        };
        style = parseStyle(position(state, false));
      });

      it('should not declare width', () => {
        expect(style.width).toBeUndefined();
      });
    });
  });
});
