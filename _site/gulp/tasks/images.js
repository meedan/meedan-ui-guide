var gulp = require('gulp');
var config = require('../config');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');

gulp.task('images', function () {
  gulp.src(config.images.src)
    .pipe(changed(config.images.dest))
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});