var gulp = require('gulp');
var changed = require('gulp-changed');
var config = require('../config');
var browserSync = require('browser-sync');

gulp.task('js', function () {
  gulp.src(config.js.src)
    .pipe(changed(config.js.dest))
    .pipe(gulp.dest(config.js.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});