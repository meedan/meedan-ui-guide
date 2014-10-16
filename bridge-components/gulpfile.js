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

// browser-sync task for starting the server.
gulp.task('browser-sync', function () {
  browserSync(serverConfig);
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
  return gulp.src(scssFiles)
    .pipe(sass({includePaths: [bowerDir]}))
    .pipe(gulp.dest(cssCompileDir))
    .pipe(reload({stream: true}));
});

// "manually" reload browsers instead of stream-injection
// e.g. for when you edit the html
// 
// via http://www.browsersync.io/docs/gulp/
// 
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Default task to be run with `gulp` on CLI
gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch(scssFiles, ['sass']);
  gulp.watch("public/**/*.html", ['bs-reload']);
});