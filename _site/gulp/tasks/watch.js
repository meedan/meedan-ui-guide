var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['bs'], function () {
  gulp.watch(config.js.src, ['js']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.markup.src, ['markup']);
});