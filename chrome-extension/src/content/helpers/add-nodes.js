export const addNode = (parent, node) => {
  if (node) {
    const { tag, ...attributes } = node;
    if (tag) {
      const element = document.createElement(tag);
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
