const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const nanoid = require('nanoid');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const { dest, src } = require('gulp');


const cleanBuild = () => del(['build/**/*']);

// Assets.
const assets = () => (
  src(['public/**/*', '!public/assets/*.css', '!public/**/*.html'])
    .pipe(dest('build'))
);

// CSS.
const css = buildID => (
  src('public/assets/*.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename((path) => {
      path.basename += `.${buildID}`;
    }))
    .pipe(dest('build/assets'))
);

// HTML.
const html = async buildID => (
  src('public/**/*.html')
    .pipe(replace(/href="\/assets\/([a-z0-9]+).css"/g, `href="/assets/$1.${buildID}.css"`))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('build'))
);

const build = async () => {
  const id = nanoid(10);
  await cleanBuild();
  await assets();
  await css(id);
  await html(id);
};

exports.build = build;
