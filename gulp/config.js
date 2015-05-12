var src = './src';
var dest = './www';

module.exports = {
  misc: {
    src: src + '/{bower_components/**/*.js, CNAME, *.js, *.pdf, images/favicons/*, robots.txt}',
    dest: dest
  },
  browserSync: {
    server: {
      baseDir: dest
    }
  },
  images: {
    src: src + '/images/*',
    dest: dest + '/images/'
  },
  sass: {
    settings: {
      includePath: './src/bower_components',
      errLogToConsole: true,
      outputStyle: "compressed"
    },
    src: src + "/sass/**/*.scss",
    dest: dest + "/css"
  },
  markup: {
    src: src + "/markup/*.html",
    dest: dest
  }
};