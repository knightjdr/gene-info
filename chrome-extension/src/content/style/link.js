const linkStyle = `
  <style>
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
      text-decoration: underline dotted;
    }
  </style>
`;

export default linkStyle;
