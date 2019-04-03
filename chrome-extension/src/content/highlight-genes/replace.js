const replace = (node, genes) => {
  const re = new RegExp(/[0-9\p{L}-]+/u);
  const nodeList = document.createDocumentFragment();
  let searchText = node.nodeValue;
  while (re.test(searchText)) {
    const match = searchText.match(re);
    const word = match[0];
    const start = match.index;
    const end = start + word.length;
    nodeList.appendChild(document.createTextNode(searchText.substring(0, start)));
    if (genes[word.toLowerCase()]) {
      const span = document.createElement('span');
      span.className = 'gix-highlight';
      span.style.backgroundColor = 'yellow';
      span.innerText = word;
      nodeList.appendChild(span);
    } else {
      nodeList.appendChild(document.createTextNode(word));
    }
    searchText = searchText.substring(end);
  }

  if (searchText) {
    nodeList.appendChild(document.createTextNode(searchText));
  }

  const { parentNode } = node;
  parentNode.replaceChild(nodeList, node);
};

export default replace;
