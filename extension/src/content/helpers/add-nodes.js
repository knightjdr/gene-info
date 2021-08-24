const svgTags = {
  circle: true,
  path: true,
  rect: true,
  svg: true,
};

const createElement = tag => (
  svgTags[tag] ? document.createElementNS('http://www.w3.org/2000/svg', tag) : document.createElement(tag)
);

export const addNode = (parent, node) => {
  if (node) {
    const { tag, ...attributes } = node;
    if (tag) {
      const element = createElement(tag);
      Object.entries(attributes).forEach(([attribute, content]) => {
        switch (attribute) {
          case 'children':
            content.forEach((child) => { addNode(element, child); });
            break;
          case 'textContent':
            element.textContent = content;
            break;
          default:
            element.setAttribute(attribute, content);
            break;
        }
      });
      parent.appendChild(element);
    }
  }
};

const addNodes = (parent, nodes) => {
  nodes.forEach((node) => {
    addNode(parent, node);
  });
};

export default addNodes;
