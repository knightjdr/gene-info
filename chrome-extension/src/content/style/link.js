const style = `
  a {
    box-sizing: border-box;
    color: var(--primary);
    text-decoration: none;
  }
  a:link,
  a:visited {
    cursor: pointer;
    border-bottom: none;
  }
  a:hover,
  a:active,
  a:focus {
    outline: none;
    text-decoration: underline dotted;
  }
`;

const linkStyleNode = {
  tag: 'style',
  textContent: style,
  type: 'text/css',
};

export default linkStyleNode;
