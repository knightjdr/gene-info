const concat = require('gulp-concat');
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const util = require('gulp-util');

const dest = 'chrome-extension/dist/';
const modules = {
    content: {src: 'chrome-extension/src/content/**/*.js', target: 'content.js'},
    event: {src: 'chrome-extension/src/events/**/*.js', target: 'event.js'},
    node: {src: 'api/**/*.js'},
    popup: {sass: 'chrome-extension/src/popup/popup.scss', src: 'chrome-extension/src/popup/**/*.js', target: 'popup.js'}
};

gulp.task('js-hint', function() {
  const module = modules[util.env.module];
  return gulp.src(module.src)
    .pipe(jshint({esversion: 6, node: true}))
    .pipe(jshint.reporter('jshint-stylish'))
  ;
});

gulp.task('js-concat', function() {
  const module = modules[util.env.module];
  return gulp.src(module.src)
		.pipe(concat(module.target))
    .pipe(gulp.dest(dest))
	;
});

gulp.task('sass', function() {
  const module = modules[util.env.module];
	gulp.src(module.sass)
   	.pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest(dest))
	;
});

gulp.task('dev', function() {
  nodemon({
    script: 'api/index.js',
    watch: modules.node.src
	}).on('restart', function() {
   	gulp.src('api/index.js')
  });
  gulp.watch(modules.content.src, ['js-hint', 'js-concat'])
    .on('change', function () {
      util.env.module = 'content';
    })
  ;
  gulp.watch(modules.event.src, ['js-hint', 'js-concat'])
    .on('change', function () {
      util.env.module = 'event';
    })
  ;
	gulp.watch(modules.node.src, ['js-hint'])
    .on('change', function () {
      util.env.module = 'node';
    })
  ;
  gulp.watch(modules.popup.src, ['js-hint', 'js-concat'])
    .on('change', function () {
      util.env.module = 'popup';
    })
  ;
  gulp.watch(modules.popup.sass, ['sass'])
    .on('change', function () {
      util.env.module = 'popup';
    })
  ;
});
