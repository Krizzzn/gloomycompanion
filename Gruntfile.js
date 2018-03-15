module.exports = function(grunt) {
 
  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  // Configure Grunt 
  grunt.initConfig({
 
    watch: {
      all: {
        files: ['app/**/*.js', '*.html', 'css/**.css'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      nohint: {
        files: ['app/**/*.js', '*.html', 'css/**.css'],
        tasks: [],
        options: {
          livereload: true
        }
      },
    },

    connect: {
      all: {
        options:{
          port: 9000,
          hostname: "0.0.0.0",
          // No need for keepalive anymore as watch will keep Grunt running
          keepalive: false,
          livereload: true,
          open: true
        }
      }
    },

    jshint: {
      all: ['app/**/*.js'],
      options: {
        esversion: 6,
        browser: true,
        strict: false,
        multistr: true,

        globals: {
          console: true
        },

        '-W097': true,
        ignores: ['app/data/*.js']
      }
    },

    clean: ['dist/*'],

    browserify: {
      dist: {
        files: {
          'dist/gloomy.min.js': ['app/main.js']
        },
        options: {

          browserifyOptions: {
            minify: true,
            paths: [
              "./app/"
            ]},
          transform: [["babelify", { "presets": ["env"] }],
                      ["uglifyify"]],
        }
      }
    },

    cssmin: {
      options: {},
      target: {
        files: {
          'dist/css/gloomy.min.css': ['css/**.css']
        }
      },
    },

    copy: {
      fonts: {
        expand: true,
        src: 'fonts/*',
        dest: 'dist/',
      },
      images: {
        expand: true,
        src: 'images/*',
        dest: 'dist/',
      },
      other: {
        expand: true,
        src: ['app.webmanifest'],
        dest: 'dist/',
      },
    },

    processhtml: {
      options: {
        data: {

        }
      },
      dist: {
        files: {
          'dist/index.html': ['index.html']
        }
      }
    },

    manifest: {
      generate: {
        options: {
            basePath: 'dist/',
            cache: ['gloomy.min.js', 'css/gloomy.min.css'],
            network: ['http://*', 'https://*'],
            preferOnline: true,
            headcomment: " Gloomy Companion",
            verbose: true,
            timestamp: false,
            hash: true,
            master: ['gloomy.min.js', 'css/gloomy.min.css']
        },
        src: [
          'fonts/*',
          'images/*'
        ],
        dest: 'dist/manifest.appcache'
      }
    },

    'gh-pages': {
      options: {
        base: 'dist',
        message: 'Auto-generated commit'
      },
      src: ['**/*']
    }


  });
 
  // Creates the `server` task
  grunt.registerTask('server',[
    'connect',
    'watch'
  ]);

  // Creates the `server` task
  grunt.registerTask('server:nohint',[
    'connect',
    'watch:nohint'
  ]);

  grunt.registerTask('build',[
    'clean',
    'browserify',
    'cssmin',
    'copy:fonts',
    'copy:images',
    'copy:other',
    'processhtml',
    'manifest'
  ]);

  grunt.registerTask('publish',[
    'build',
    'gh-pages'
  ]);
};