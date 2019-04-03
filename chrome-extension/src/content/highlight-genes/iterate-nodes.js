import replace from './replace';

const interateNodes = () => {
  const genes = { pdcd10: 1, p38β: 1 };
  const iterator = (node) => {
    if (node === null) {
      return;
    }

    const children = Array.prototype.slice.call(node.childNodes);

    if (children.length) {
      children.forEach((child) => {
        if (child.nodeType === 3) {
          replace(child, genes);
        } else if (
          child.nodeType === 1
          && child.nodeName !== 'A'
          && child.nodeName !== 'BUTTON'
        ) {
          iterator(child);
        }
      });
    }
  };
  iterator(document.body);
};

export default interateNodes;
