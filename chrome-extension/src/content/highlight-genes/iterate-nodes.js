import replace from './replace';

const interateNodes = () => {
  const genes = { PDCD10: 1, p38β: 1 };
  const iterator = (p) => {
    if (p === null) {
      return;
    }

    const children = Array.prototype.slice.call(p.childNodes);

    if (children.length) {
      children.forEach((child) => {
        if (child.nodeType === 3) {
          replace(child, genes);
        } else if (child.nodeType === 1) {
          iterator(child);
        }
      });
    }
  };
  iterator(document.body);
};

export default interateNodes;
