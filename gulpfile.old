var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var reload          = browserSync.reload;
var sass            = require('gulp-sass');
var scssFiles       = "./public/assets/sass/**/*.scss";
var cssCompileDir   = "./public/assets/css";
var bowerDir        = "./public/bower-components";

var serverConfig = {
  server: {
    baseDir: "public"
  }
};

// start browser-sync
gulp.task('browser-sync', function () {
  browserSync(serverConfig);
});

// parse sass
gulp.task('sass', function () {
  return gulp.src(scssFiles)
    .pipe(sass({includePaths: [bowerDir]}))
    .pipe(gulp.dest(cssCompileDir))
    .pipe(reload({stream: true}));
});

// reload bs without stream
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Default task to be run with `gulp` on CLI
gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch(scssFiles, ['sass']);
  gulp.watch("public/**/*.html", ['bs-reload']);
});