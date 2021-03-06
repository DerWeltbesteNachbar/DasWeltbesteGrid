'use strict';

var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});