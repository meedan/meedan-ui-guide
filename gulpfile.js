// Gulp and friends
var gulp = require('gulp');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

// we define the project name and version in package.js
var pkg = require('./package.json');
var config = require('./config/config.js');

// Browser sync
var browserSync = require('browser-sync');
var reload = browserSync.reload;

//
// Dust template example
//
// Dust templating
var dust = require('gulp-dust');
dust.helpers = require('dustjs-helpers').helpers;
var dusthtml = require('gulp-dust-html');
var dustTemplates = "src/dust_templates";
var dustConfig = {
  basePath: dustTemplates,
  whitespace: true,
  data: {
    pkg: pkg,
    config: config,
    banner: '/*! ' + pkg.name + ' - v' + pkg.version + ' - ' + (new Date()).toString()
  }
}

gulp.task('dustindex', function (cb) {
  return gulp.src('src/index.dust.html').pipe(
      dusthtml(
        dustConfig
      ))
    .on('error', cb)
    .pipe(rename('index.html'))
    .pipe(gulp.dest('www/'));
});

// templates
gulp.task('dust', function () {
  return gulp.src('src/dust_templates/*.html')
    .pipe(dust())
    .on('error', ehandler)
    .pipe(gulp.dest('src/dust_templates/compiled'));
});


// nodemon
gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js',
    ext: 'js json',
    env: {
      'NODE_ENV': 'development'
    }
  }).on('restart', 'lint')
});

// Browser sync 
var browserSyncConfig = {
  reloadDelay: 2000,
  notify: false,
  server: {
    baseDir: "./www",
  }
}

// Static server
gulp.task('browser-sync', function () {
  browserSync(browserSyncConfig);
});

// Reload all Browsers
gulp.task('bs-reload', ['uglify', 'sass'], function () {
  browserSync.reload();
});

// uglify
gulp.task('uglify', ['dust', 'dustindex'], function () {
  return gulp.src([
      'node_modules/dustjs-linkedin/dist/dust-core.js',
      'node_modules/dustjs-helpers/dist/dust-helpers.min.js',
      'node_modules/crossroads/node_modules/signals/dist/signals.js',
      'node_modules/hasher/dist/js/hasher.js',
      'node_modules/crossroads/dist/crossroads.js',
      'bower_components/lodash/lodash.js',
      'node_modules/async/lib/async.js',
      'src/dust/compiled/*.js',
      'src/js/lib/*.js',
      'src/js/*.js'
    ])
    .pipe(concat('all.js'))
    //  .pipe(uglify())
    .on('error', ehandler)
    .pipe(rename(pkg.name + '.min.js'))
    .pipe(gulp.dest('www/js/'))
});

// lint
gulp.task('lint', function () {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .on('error', ehandler)
});

// Sass
//
// Configure sass compiler
var sass = require('gulp-sass');
var scssFiles = "sass/**/*.scss";
var cssCompileDir = "www/assets/css";
var bowerPaths = ["www/bower_components"];
gulp.task('sass', function () {
  return gulp.src(scssFiles)
    .pipe(sass({
      errLogToConsole: true,
      includePaths: bowerPaths,
      outputStyle: "compressed"
    }))
    .pipe(gulp.dest(cssCompileDir))
    .pipe(reload({
      stream: true
    }))
    .on('error', ehandler);
});


// WATCH EVERYTHING
//
gulp.task('watch', ['browser-sync'], function () {
  var watcher = gulp.watch(
    ['src/**/*', 'src/*', '!src/dust/compiled/*', '!.#*'], ['lint', 'dustindex', 'dust', 'sass', 'uglify', 'bs-reload']
  );

  watcher.on('change', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    //      console.log(event);
    reload;
  });
});

// WATCH SASS
gulp.task('watch-sass', ['sass', 'browser-sync'], function () {
  gulp.watch(scssFiles, ['sass']);
});

// DEFAULT
gulp.task('default', ['watch']);

// ERROR HANDLING
var ehandler = function (err) {
  console.log('ehandler');
  console.log(err.message);
}