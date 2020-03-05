import addNodes, { addNode } from './add-nodes';

describe('Add node to a parent element', () => {
  it('should add nodes', () => {
    const node = {
      children: [
        { tag: 'span', textContent: 'first span' },
        { tag: 'span', textContent: 'second span' },
        {
          children: [
            { tag: 'span', textContent: 'third span' },
          ],
          tag: 'div',
        },
      ],
      className: 'class-1',
      tag: 'div',
    };

    const parent = document.createElement('div');
    addNode(parent, node);

    const expected = '<div classname="class-1">'
      + '<span>first span</span>'
      + '<span>second span</span>'
      + '<div>'
      + '<span>third span</span>'
      + '</div>'
    + '</div>';
    expect(parent.innerHTML).toBe(expected);
  });
});

describe('Add nodes to dom', () => {
  it('should add nodes', () => {
    const nodes = [
      {
        tag: 'div',
        textContent: 'first div',
      },
      {
        children: [
          { tag: 'span', textContent: 'first span' },
          { tag: 'span', textContent: 'second span' },
          {
            children: [
              { tag: 'span', textContent: 'third span' },
            ],
            tag: 'div',
          },
        ],
        className: 'class-1',
        tag: 'div',
      },
    ];

    const parent = document.createElement('div');
    addNodes(parent, nodes);

    const expected = '<div>first div</div>'
    + '<div classname="class-1">'
      + '<span>first span</span>'
      + '<span>second span</span>'
      + '<div>'
        + '<span>third span</span>'
      + '</div>'
    + '</div>';
    expect(parent.innerHTML).toBe(expected);
  });
});
