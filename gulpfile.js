var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('default', [
  'docs'
]);

gulp.task('less', function () {
  return gulp.src('./src/ripple.less')
    .pipe(less())
    .pipe(gulp.dest('dist'))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('docs', ['less'], function () {
  return gulp.src([
    './dist/*.min.css'
  ])
    .pipe(gulp.dest('docs'))
});