const concat = require('gulp-concat');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const util = require('gulp-util');

const dest = 'chrome-extension/dist/';
const modules = {
  content: {
    sass: 'chrome-extension/src/content/**/*.scss',
    sassTarget: 'content.css',
    src: 'chrome-extension/src/content/**/*.js',
    target: 'content.js',
  },
  event: { src: 'chrome-extension/src/events/**/*.js', target: 'event.js' },
  node: { src: 'api/**/*.js' },
  popup: {
    sass: 'chrome-extension/src/popup/popup.scss',
    src: 'chrome-extension/src/popup/**/*.js',
    target: 'popup.js',
  },
};

gulp.task('js-concat', () => {
  const module = modules[util.env.module];
  return gulp.src(module.src)
    .pipe(concat(module.target))
    .pipe(gulp.dest(dest));
});

gulp.task('sass', () => {
  const module = modules[util.env.module];
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
});

gulp.task('dev', () => {
  nodemon({
    script: 'api/index.js',
    watch: modules.node.src,
  }).on('restart', () => {
    gulp.src('api/index.js');
  });
  gulp.watch(modules.content.src, ['js-concat'])
    .on('change', () => {
      util.env.module = 'content';
    });
  gulp.watch(modules.content.sass, ['sass'])
    .on('change', () => {
      util.env.module = 'content';
    });
  gulp.watch(modules.event.src, ['js-concat'])
    .on('change', () => {
      util.env.module = 'event';
    });
  gulp.watch(modules.popup.src, ['js-concat'])
    .on('change', () => {
      util.env.module = 'popup';
    });
  gulp.watch(modules.popup.sass, ['sass'])
    .on('change', () => {
      util.env.module = 'popup';
    });
});
