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
  event: { src: 'chrome-extension/src/events/**/*.js', target: 'event.js' },
  popup: {
    sass: 'chrome-extension/src/popup/popup.scss',
    src: 'chrome-extension/src/popup/**/*.js',
    target: 'popup.js',
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
  gulp.watch(modules.event.src, jsBuild(modules.event));
  gulp.watch(modules.popup.src, jsBuild(modules.popup));
  gulp.watch(modules.content.sass, sassBuild(modules.content));
  gulp.watch(modules.popup.sass, sassBuild(modules.popup));
});
