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
  documentation: {
    src: [src + "/**/*.scss", "./README.md", "./bower_components/**/*.scss"],
    dest: dest + "/docs",
    sassdocOptions: {
      dest: dest + "/docs",
      groups: {
        undefined: "ungrouped"
      }
      verbose: true,
      display: {
        access: ['public', 'private'],
        alias: true
      }
    }
  },
  sass: {
    settings: {
      includePaths: [src + '/bower_components'],
      errLogToConsole: true,
      outputStyle: "compressed"
    },
    src: [src + '/bower_components', src + "/sass/**/*.scss"],
    dest: dest + "/css"
  },
  markup: {
    src: [src + "/markup/**/*.html"],
    dest: dest
  }
};