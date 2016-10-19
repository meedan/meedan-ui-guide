var dest = "./www";
var src = './src';

module.exports = {
  browserSync: {
    port: 6779,
    server: {
      baseDir: dest
    }
  },
  images: {
    src: src + "/images/*",
    dest: dest + "/images"
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
  markup: {
    dest: dest,
    src: src + ["/markup/{*.html,_*.html,*.md}"],
    prefix: "@@"
  }
};