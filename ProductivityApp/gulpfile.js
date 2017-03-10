var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

gulp.task('js', function() {
  return gulp.src([
    './build/js/app.js',
    './build/js/1.1.js',
  ])
      .pipe(concat('bundle.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public/js/'));
});

gulp.task('vendors', function() {
  return gulp.src([
    // './dev/utils/jquery.js',
    './build/js/vendors.bundle.js',
  ])
      .pipe(uglify())
      .pipe(concat('vendors.min.js'))
      .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['js', 'vendors']);