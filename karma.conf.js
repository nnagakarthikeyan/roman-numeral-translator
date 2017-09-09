// Karma configuration
// Generated on Fri Sep 08 2017 15:16:58 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './app',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'core/*.js',
      'integer-to-roman/integer-to-roman.js',
      'integer-to-roman/integer-to-roman.controller.js',
      'integer-to-roman/integer-to-roman.controller.spec.js',
      'roman-to-integer/roman-to-integer.js',
      'roman-to-integer/roman-to-integer.controller.js',
      'roman-to-integer/roman-to-integer.controller.spec.js'
     ],


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    reporters: ['spec',' junit'],

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

     plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-spec-reporter'
    ],
   
  })
}
