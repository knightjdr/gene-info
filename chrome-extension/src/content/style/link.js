const linkStyle = `
  <style>
    a {
      box-sizing: border-box;
      text-decoration: none;
    }
    a:link,
    a:visited {
      color: var(--primary);
      cursor: pointer;
      border-bottom: none;
    }
    a:hover,
    a:active,
    a:focus {
      text-decoration: underline dotted;
    }
  </style>
`;

export default linkStyle;
