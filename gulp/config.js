var src = './src';
var dest = './www';

module.exports = {
  misc: {
    src: src + '/{CNAME, *.pdf, images/favicons/*, robots.txt }',
    dest: dest
  },
  browserSync: {
    server: {
      baseDir: dest
    }
  },
  images: {
    src: [src + '/images/*', src + '/images/**/*'],
    dest: dest + '/images/'
  },
  sass: {
    settings: {
      includePaths: [src + '/bower_components'],
      errLogToConsole: true,
      outputStyle: "compressed"
    },
    src: src + "/sass/**/*.scss",
    dest: dest + "/css"
  },
  markup: {
    src: [src + "/markup/**/*.html", src + "/markup/**/*.html"],
    dest: dest
  }
};