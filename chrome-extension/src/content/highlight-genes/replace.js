const replace = (node, genes) => {
  const re = new RegExp(/[0-9\p{L}-]+/u);
  const replacementNodes = [];
  let searchText = node.nodeValue;
  while (re.test(searchText)) {
    const match = searchText.match(re);
    const word = match[0];
    const start = match.index;
    const end = start + word.length;
    replacementNodes.push(document.createTextNode(searchText.substring(0, start)));
    if (genes[word]) {
      const span = document.createElement('span');
      span.className = 'gix-highlight';
      span.style.backgroundColor = 'yellow';
      span.innerText = word;
      replacementNodes.push(span);
    } else {
      replacementNodes.push(document.createTextNode(word));
    }
    searchText = searchText.substring(end);
  }

  const { parentNode } = node;
  parentNode.removeChild(node);
  replacementNodes.forEach((newNode) => {
    parentNode.appendChild(newNode);
  });
};

export default replace;
