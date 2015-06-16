var sassdoc = require('sassdoc');
var gulp = require('gulp');
var config = require('../config');

gulp.task('sassdoc', function () {
  var options = {
    dest: './www/sassdoc',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true,
    }
  };

  return gulp.src(config.sass.src)
    .pipe(sassdoc(options));
});