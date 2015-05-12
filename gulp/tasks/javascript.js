var gulp = require("gulp");
var changed = require('gulp-changed');
var config = require('../config');

gulp.task('javascript', function () {
  gulp.src(config.javascript.src)
    .pipe(changed(config.misc.dest))
    .pipe(gulp.dest(config.misc.dest));
});