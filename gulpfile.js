
var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var peg = require('gulp-peg');


/**
 * Build library
 */
gulp.task('build', function() {
  return gulp.src(['src/*.pegjs'])
    .pipe(peg())
    .pipe(gulp.dest('lib'));
});


gulp.task('clean', function() {
  gulp.src(['lib/*'], { read: false })
    .pipe(rimraf());
});


gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
