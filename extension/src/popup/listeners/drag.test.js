import { updateTab } from '../helpers/message';

import {
  arrayMove,
  data,
  drag,
  dragEnd,
  dragOver,
  dragStart,
  elementChildren,
  mouseOverID,
} from './drag';

jest.mock('../helpers/message');
global.chrome = {
  storage: {
    local: {
      set: jest.fn(),
    },
  },
};
global.document.addEventListener = jest.fn();
global.document.removeEventListener = jest.fn();

describe('Drag data storage object', () => {
  it('should set value', () => {
    data.set('keyA', 'valueA');
    expect(data.values.keyA).toBe('valueA');
  });

  it('should set value', () => {
    data.set('keyA', 'valueA');
    expect(data.get('keyA')).toBe('valueA');
  });
});

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
    expect(mouseOverID(-10, arr, 2)).toEqual(expected);
  });

  it('should return previous element ID and its index when rising within children', () => {
    const expected = { dropBeforeID: 'b', dropIndex: 1 };
    expect(mouseOverID(15, arr, 2)).toEqual(expected);
  });

  it('should return next element ID and its index when dropping within children', () => {
    const expected = { dropBeforeID: 'c', dropIndex: 1 };
    expect(mouseOverID(25, arr, 0)).toEqual(expected);
  });

  it('should return "blank" element ID and last index when mouse position is below last element', () => {
    const expected = { dropBeforeID: 'drag_noelement', dropIndex: 2 };
    expect(mouseOverID(46, arr, 0)).toEqual(expected);
  });
});

describe('Drag', () => {
  let spyGet;
  let spySet;

  afterAll(() => {
    spyGet.mockRestore();
    spySet.mockRestore();
    document.body.innerHTML = '';
  });

  beforeAll(() => {
    // Create container with children and placeholder.
    const container = document.createElement('div');
    container.id = 'settings_drop_container';
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
        case 'y':
          return 25;
        default:
          return null;
      }
    });
    spySet = jest.spyOn(data, 'set');
  });

  describe('dragging item', () => {
    beforeAll(() => {
      const e = {
        preventDefault: jest.fn(),
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
      expect(document.getElementById('settings_drop_container').children[2].id).toBe('drag_placeholder');
    });
  });
});

describe('Drag over', () => {
  let spySet;

  afterAll(() => {
    spySet.mockRestore();
  });

  beforeAll(() => {
    // Mock data setter.
    spySet = jest.spyOn(data, 'set');
    const e = {
      clientY: 10,
    };
    dragOver(e);
  });

  it('should set mouse position', () => {
    expect(spySet).toHaveBeenCalledWith('y', 10);
  });
});

describe('Drag end', () => {
  let el;
  let spyGet;
  let spySet;

  afterAll(() => {
    spyGet.mockRestore();
    spySet.mockRestore();
    document.body.innerHTML = '';
  });

  beforeAll(() => {
    global.document.removeEventListener.mockClear();
    // Create container with children, dragImage and placeholder.
    const container = document.createElement('div');
    container.id = 'settings_drop_container';
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
    const dragImage = document.createElement('div');
    dragImage.id = 'drag_image';
    dragImage.style.display = 'none';
    container.appendChild(dragImage);

    // Mock data getter and setter.
    spyGet = jest.spyOn(data, 'get').mockImplementation((key) => {
      switch (key) {
        case 'children':
          return [
            { id: 'a', top: 0 },
            { id: 'b', top: 20 },
            { id: 'c', top: 40 },
          ];
        case 'dropBeforeID':
          return 'c';
        case 'dropIndex':
          return 1;
        case 'startIndex':
          return 0;
        default:
          return null;
      }
    });
    spySet = jest.spyOn(data, 'set');

    chrome.storage.local.set.mockClear();
    updateTab.mockClear();
    const e = {
      preventDefault: jest.fn(),
      target: { id: 'a' },
    };
    dragEnd(e);
    el = document.getElementById('a');
  });

  it('should destory placeholder div', () => {
    expect(document.getElementById('drag_placeholder')).toBeNull();
  });

  it('should destory dragImage div', () => {
    expect(document.getElementById('drag_image')).toBeNull();
  });

  it('should remove drag over listener', () => {
    expect(global.document.removeEventListener).toHaveBeenCalledWith('dragover', dragOver);
  });

  it('should update storage', () => {
    const newOrder = ['b', 'a', 'c'];
    expect(chrome.storage.local.set).toHaveBeenCalledWith({ setting_order: newOrder });
  });

  it('should update tab with new order', () => {
    const newOrder = ['b', 'a', 'c'];
    expect(updateTab).toHaveBeenCalledWith('updateSetting', 'setting_order', newOrder);
  });

  it('should set drag element background color', () => {
    expect(el.style.backgroundColor).toBe('transparent');
  });

  it('should set drag element position', () => {
    expect(el.style.position).toBe('static');
  });

  it('should set drag element width', () => {
    expect(el.style.width).toBe('auto');
  });

  it('should set drag element zIndex', () => {
    expect(el.style.zIndex).toBe('auto');
  });
});

describe('Drag start', () => {
  let setData;
  let spySet;

  afterAll(() => {
    spySet.mockRestore();
  });

  beforeAll(() => {
    setData = jest.fn();
    // Mock data setter.
    spySet = jest.spyOn(data, 'set');
  });

  describe('light theme', () => {
    let el;

    afterAll(() => {
      document.body.innerHTML = '';
    });

    beforeAll(() => {
      document.addEventListener.mockClear();
      // Create container with children, dragImage and placeholder.
      const container = document.createElement('div');
      container.className = 'theme_light';
      container.id = 'settings_drop_container';
      document.body.appendChild(container);
      ['a', 'b', 'c'].forEach((id) => {
        const child = document.createElement('div');
        child.id = id;
        child.style.height = 20;
        container.appendChild(child);
      });

      // Create event and call dragStart.
      const e = {
        clientY: 10,
        dataTransfer: {
          setData,
          setDragImage: jest.fn(),
        },
        target: {
          id: 'a',
          offsetHeight: 20,
          offsetTop: 0,
          offsetWidth: 100,
        },
      };
      dragStart(e);
      el = document.getElementById('a');
    });

    it('should set data for Firefox', () => {
      expect(setData).toHaveBeenCalledWith('text/plain', '');
    });

    it('should at drag over event listenter', () => {
      expect(document.addEventListener).toHaveBeenCalledWith('dragover', dragOver);
    });

    describe('drag image', () => {
      it('should append div as last child', () => {
        expect(document.getElementById('settings_drop_container').children[4].id).toBe('drag_image');
      });

      it('should make hidden', () => {
        expect(document.getElementById('drag_image').style.opacity).toBe('0');
      });
    });

    describe('placeholder', () => {
      it('should create div', () => {
        expect(document.getElementById('drag_placeholder')).not.toBeNull();
      });

      it('should append before target element', () => {
        expect(document.getElementById('settings_drop_container').children[0].id).toBe('drag_placeholder');
      });

      it('should have height equal to target', () => {
        expect(document.getElementById('drag_placeholder').style.height).toBe('20px');
      });

      it('should have width equal to target', () => {
        expect(document.getElementById('drag_placeholder').style.width).toBe('100px');
      });
    });

    describe('drag element', () => {
      it('should set background color', () => {
        expect(el.style.backgroundColor).toBe('rgb(250, 250, 250)');
      });

      it('should set position', () => {
        expect(el.style.position).toBe('absolute');
      });

      it('should set top', () => {
        expect(el.style.top).toBe('0px');
      });

      it('should set width', () => {
        expect(el.style.width).toBe('100px');
      });

      it('should set zIndex', () => {
        expect(el.style.zIndex).toBe('10');
      });
    });

    describe('set data', () => {
      it('should set children', () => {
        const children = [
          { id: 'a', top: 0 },
          { id: 'b', top: 0 },
          { id: 'c', top: 0 },
        ];
        expect(spySet).toHaveBeenCalledWith('children', children);
      });

      it('should set offset', () => {
        expect(spySet).toHaveBeenCalledWith('offset', 10);
      });

      it('should set startIndex', () => {
        expect(spySet).toHaveBeenCalledWith('startIndex', 0);
      });

      it('should set mouse position', () => {
        expect(spySet).toHaveBeenCalledWith('y', 10);
      });
    });
  });

  describe('dark theme', () => {
    let el;

    afterAll(() => {
      document.body.innerHTML = '';
    });

    beforeAll(() => {
      // Create container with children, dragImage and placeholder.
      const container = document.createElement('div');
      container.className = 'theme_dark';
      container.id = 'settings_drop_container';
      document.body.appendChild(container);
      ['a', 'b', 'c'].forEach((id) => {
        const child = document.createElement('div');
        child.id = id;
        child.style.height = 20;
        container.appendChild(child);
      });

      // Create event and call dragStart.
      const e = {
        clientY: 10,
        dataTransfer: {
          setData: jest.fn(),
          setDragImage: jest.fn(),
        },
        target: {
          id: 'a',
          offsetHeight: 20,
          offsetTop: 0,
          offsetWidth: 100,
        },
      };
      dragStart(e);
      el = document.getElementById('a');
    });

    it('should set drag element background color', () => {
      expect(el.style.backgroundColor).toBe('rgb(50, 54, 57)');
    });
  });
});
