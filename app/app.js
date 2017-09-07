
  'use strict';


  angular.module('mainApp', [
    'ngRoute',
    'intergertoRomanApp',
    'romantoIntegerApp',
    'romanTranslatorApp'
  ]).

  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/toroman'});
  }]);


