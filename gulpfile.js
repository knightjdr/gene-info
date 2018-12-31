const concat = require('gulp-concat');
const gulp = require('gulp');
const sass = require('gulp-sass');

const dest = 'chrome-extension/dist/';
const modules = {
  content: {
    sass: 'chrome-extension/src/content/**/*.scss',
    sassTarget: 'content.css',
    src: 'chrome-extension/src/content/**/*.js',
    target: 'content.js',
  },
};

const jsBuild = module => (
  gulp.src(module.src)
    .pipe(concat(module.target))
    .pipe(gulp.dest(dest))
);

const sassBuild = (module) => {
  if (module.sassTarget) {
    gulp.src(module.sass)
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(concat(module.sassTarget))
      .pipe(gulp.dest(dest));
  } else {
    gulp.src(module.sass)
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(gulp.dest(dest));
  }
};

gulp.task('dev', () => {
  gulp.watch(modules.content.src, jsBuild(modules.content));
  gulp.watch(modules.content.sass, sassBuild(modules.content));
});
