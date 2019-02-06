const linkStyle = `
  <style>
    a {
      box-sizing: border-box;
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
    .theme_dark a {
      color: var(--primary_dark);
    }
    .theme_default a {
      color: var(--primary);
    }
  </style>
`;

export default linkStyle;
