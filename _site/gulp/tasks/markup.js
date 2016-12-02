var gulp = require('gulp');
var config = require('../config');
var notify = require('gulp-notify');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var debug = require('gulp-debug');
var colors = require('colors');
var handleErrors = require('../util/handleErrors');
var fileinclude = require('gulp-file-include');

gulp.task('markup', function () {
  return gulp.src(config.markup.src)
    .pipe(changed(config.markup.dest))
    .pipe(fileinclude({
      prefix: config.markup.prefix
    }))
    .on('error', handleErrors)
    .pipe(debug({title: 'markup:'}))
    .pipe(gulp.dest(config.markup.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});