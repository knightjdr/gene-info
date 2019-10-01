const { minify } = require('html-minifier');

const minifyHTML = str => (
  minify(str, {
    collapseWhitespace: true,
    minifyCSS: true,
  })
);

export default minifyHTML;
