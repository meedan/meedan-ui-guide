var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var debug = require('gulp-debug');
var sassConfig   = require('../config').sass;
var handleErrors = require('../util/handleErrors');

gulp.task('sass', function () {
  return gulp.src(sassConfig.src)
    .pipe(sourcemaps.init())
    .pipe(sass(sassConfig.settings))
    .on('error', handleErrors)
    .pipe(debug({title: 'sass:'}))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer("last 4 versions", "> 1%"))
    .pipe(gulp.dest(sassConfig.dest))
    .pipe(browserSync.reload({
      stream:true
    }));
})
