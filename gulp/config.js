var dest = "./www";
var src = './src';

module.exports = {
  misc: {
    src: src + '/{CNAME, *.pdf, images/favicons/*, robots.txt}',
    dest: dest
  },
  browserSync: {
    server: {
      baseDir: dest
    }
  },
  js: {
    src: src + "/js/**/*.js",
    dest: dest + "/js"
  },
  sass: {
    settings: {
      errLogToConsole: true,
      outputStyle: "expanded"
    },
    src: src + "/styles/**/*.scss",
    dest: dest + "/css"
  },
  images: {
    src: src + "/images/*",
    dest: dest + "/images",
    imagemin: {
      optimizationLevel: 6,
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }]
    }
  },
  markup: {
    dest: dest,
    src: src + ["/markup/{*.html,_*.html,*.md}"]
  }
};