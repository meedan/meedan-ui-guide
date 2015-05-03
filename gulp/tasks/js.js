var gulp = require('gulp');

gulp.task('js', function () {
  return gulp.src(['src/assets/js/*', 'src/assets/js/**/*'])
    .pipe(gulp.dest('www/assets/js/'));
});