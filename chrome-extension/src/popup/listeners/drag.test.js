import {
  arrayMove,
  data,
  drag,
  elementChildren,
  mouseOverID,
} from './drag';

describe('Move array item', () => {
  it('should move item in an array', () => {
    const items = [
      { arr: [0, 1, 2, 3, 4], start: 1, finish: 0 },
      { arr: [0, 1, 2, 3, 4], start: 4, finish: 2 },
      { arr: [0, 1, 2, 3, 4], start: 0, finish: 4 },
    ];
    const expected = [
      [1, 0, 2, 3, 4],
      [0, 1, 4, 2, 3],
      [1, 2, 3, 4, 0],
    ];
    items.forEach((item, index) => {
      expect(arrayMove(item.arr, item.start, item.finish)).toEqual(expected[index]);
    });
  });
});

describe('Element children', () => {
  it('should return child IDs and top position from an element', () => {
    const element = {
      children: [
        { id: 'a', offsetTop: 0, other: 'value' },
        { id: 'b', offsetTop: 20, other: 'value' },
        { id: 'c', offsetTop: 45, other: 'value' },
      ],
    };
    const expected = [
      { id: 'a', top: 0 },
      { id: 'b', top: 20 },
      { id: 'c', top: 45 },
    ];
    expect(elementChildren(element)).toEqual(expected);
  });
});

describe('Mouse over element', () => {
  const arr = [
    { id: 'a', top: 0 },
    { id: 'b', top: 20 },
    { id: 'c', top: 45 },
  ];

  it('should return 0 element when mouse position is above first child', () => {
    const expected = { dropBeforeID: 'a', dropIndex: 0 };
    expect(mouseOverID(-10, arr)).toEqual(expected);
  });

  it('should return next element ID and current index when dropping within children', () => {
    const expected = { dropBeforeID: 'c', dropIndex: 1 };
    expect(mouseOverID(25, arr)).toEqual(expected);
  });

  it('should return "blank" element ID and last index when mouse position is below last element', () => {
    const expected = { dropBeforeID: 'drag_noelement', dropIndex: 2 };
    expect(mouseOverID(46, arr)).toEqual(expected);
  });
});

describe('Drag', () => {
  let spyGet;
  let spySet;

  afterAll(() => {
    spyGet.mockRestore();
    spySet.mockRestore();
  });

  beforeAll(() => {
    // Create container with children and placeholder.
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
    ['a', 'b', 'c'].forEach((id) => {
      const child = document.createElement('div');
      child.id = id;
      child.style.height = 20;
      container.appendChild(child);
    });
    const placeholder = document.createElement('div');
    placeholder.id = 'drag_placeholder';
    placeholder.style.height = '20px';
    container.insertBefore(placeholder, document.getElementById('a'));

    // Mock data getter and setter.
    spyGet = jest.spyOn(data, 'get').mockImplementation((key) => {
      switch (key) {
        case 'children':
          return [
            { id: 'a', top: 0 },
            { id: 'b', top: 20 },
            { id: 'c', top: 40 },
          ];
        case 'offset':
          return 5;
        default:
          return null;
      }
    });
    spySet = jest.spyOn(data, 'set');
  });

  describe('final mouseup', () => {
    beforeAll(() => {
      const e = {
        clientY: 25,
        preventDefault: jest.fn(),
        screenY: false,
        target: { id: 'a' },
      };
      drag(e);
    });

    it('should not call setter', () => {
      expect(spySet).not.toHaveBeenCalled();
    });
  });

  describe('dragging item', () => {
    beforeAll(() => {
      const e = {
        clientY: 25,
        preventDefault: jest.fn(),
        screenY: true,
        target: { id: 'a' },
      };
      drag(e);
    });

    it('should update dragged element position', () => {
      expect(document.getElementById('a').style.top).toBe('20px');
    });

    it('should update dropBeforeID', () => {
      expect(spySet).toHaveBeenCalledWith('dropBeforeID', 'c');
    });

    it('should update dropIndex', () => {
      expect(spySet).toHaveBeenCalledWith('dropIndex', 1);
    });

    it('should move placeholder div to new drop position', () => {
      /* The placholder will be dropped between b and c, so its position
      ** in the container should be 2: ['a', 'b', 'drag_placeholder', 'c'] */
      expect(document.getElementById('container').children[2].id).toBe('drag_placeholder');
    });
  });
});
