// GRUNT
//https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md

module.exports = function (grunt) {

  grunt.initConfig({

    lint : {
      files : [
        'public/js/*.js',
        'test/spec/*.js'
      ]
    },

    watch : {
      files : '<config:lint.files>',
      tasks : 'lint'
    },

    jshint : {
      options : {
        bitwise   : false,
        curly     : false,
        camelcase : true,
        forin     : true,
        eqeqeq    : true,
        immed     : true,
        latedef   : true,
        newcap    : true,
        noarg     : true,
        sub       : false,
        undef     : true,
        boss      : true,
        eqnull    : true,
        browser   : true,
        indent    : 2,
        quotmark  : 'single',
        unused    : true
      },
      globals : {
        console : true,
        require : false,
        define  : false
      }
    },

    //CONCAT FOR USE OF ALMOND
    concat : {
      dist : {
        src : [
          "assets/js/libs/almond.js",
          "dist/debug/require.js"
        ],

        dest      : "dist/debug/require.js",
        separator : ";"
      }
    },

    //https://github.com/sindresorhus/grunt-sass
    sass   : {
      dist : {
        src  : 'public/css/main.scss',
        dest : 'public/css/main.css'
      }
    },

    requirejs : {
      mainConfigFile       : "public/main.js",
      out                  : "dist/debug/require.js",
      name                 : "main",
      wrap                 : false,
      // almond specific contents
      // *insert almond in all your modules
      almond               : true,
      replaceRequireScript : [
        {
          files  : ['build/index.html'],
          module : 'main'
        }
      ]
    },

    // The headless Jasmine testing is provided by grunt-jasmine-task.
    jasmine   : {
      all : ["test/*.html"]
    }

  });

  grunt.loadNpmTasks('grunt-jasmine-task');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('debug', 'lint watch');

  grunt.registerTask('default', 'lint jasmine');
  grunt.registerTask('build', 'lint requirejs sass concat');
};