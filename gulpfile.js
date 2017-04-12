const gulp = require('gulp');
const jshint = require('gulp-jshint');
const nodemon = require('gulp-nodemon');

const nodeSource = 'api/**/*.js';

gulp.task('jshint-node', function() {
  return gulp.src(nodeSource)
    .pipe(jshint({esversion: 6, node: true}))
    .pipe(jshint.reporter('jshint-stylish'))
	;
});

gulp.task('dev', function() {
  nodemon({
    script: 'api/index.js',
    watch: nodeSource
	}).on('restart', function() {
   	gulp.src('api/index.js')
  });
	gulp.watch(nodeSource, ['jshint-node']);
});
