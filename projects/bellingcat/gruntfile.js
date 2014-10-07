module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      grunt: { files: ['Gruntfile.js'] },
      sass: {
        files: ['assets/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      options: {
        includePaths: ['bower_components']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'assets/css/style.css': 'assets/sass/style.scss'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('node_modules/grunt-contrib-watch');
  grunt.loadNpmTasks('node_modules/grunt-sass');
  grunt.registerTask('default', ['sass', 'watch']);
};