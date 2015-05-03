var gulp = require('gulp');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var dust = require('gulp-dust');
dust.helpers = require('dustjs-helpers').helpers;
var dusthtml = require('gulp-dust-html');
var pkg = require('./package.json');
var config = require('./config/config.js');
var scssFiles = "src/sass/**/*.scss";
var cssCompileDir = "www/assets/css";
var changed = require('gulp-changed');
var autoprefixer = require('gulp-autoprefixer');

// Browser-sync
//
var browserSyncConfig = {
  reloadDelay: 2000,
  notify: false,
  server: {
    baseDir: "./www",
  }
}

// Dust templates
var dustConfig = {
  basePath: 'src',
  whitespace: true,
  data: {
    pkg: pkg,
    config: config,
    banner: '/*! ' + pkg.name + ' - v' + pkg.version + ' - ' + (new Date()).toString()
  }
}

// Sass stylesheets
//
var sassConfig = {
  errLogToConsole: true,
  includePaths: ["www/bower_components"],
}

gulp.task('images', function () {
  return gulp.src(['src/assets/images/*', 'src/assets/images/**/*'])
    .pipe(gulp.dest('www/assets/images/'));
});

gulp.task('js', function () {
  return gulp.src(['src/assets/js/*', 'src/assets/js/**/*'])
    .pipe(gulp.dest('www/assets/js/'));
});


gulp.task('dust', function (cb) {
  return gulp.src(['src/*.dust', '!src/_*.dust'])
    .pipe(dusthtml(dustConfig))
    .on('error', cb)
    .pipe(gulp.dest('www/'));
});

gulp.task('sass', function () {
  return gulp.src(scssFiles)
    .pipe(sass(sassConfig))
    .pipe(autoprefixer("last 4 versions", "> 1%"))
    .pipe(gulp.dest(cssCompileDir))
    .pipe(reload({
      stream: true
    }))
});

// Default task
gulp.task('default', function () {
  gulp.watch(scssFiles, ['sass']);
  gulp.watch('src/*.{dust,html}', ['dust', 'images', 'js']).on('change', reload);
  browserSync(browserSyncConfig);
});
