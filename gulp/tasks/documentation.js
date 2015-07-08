var sassdoc = require('sassdoc');
var gulp = require('gulp');
var config = require('../config');

gulp.task('documentation', function () {
  return gulp.src(config.documentation.src)
    .pipe(sassdoc(config.documentation.sassdocOptions));
});