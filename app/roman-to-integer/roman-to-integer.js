'use strict';

  angular.module('romantoIntegerApp', ['ngRoute','romanTranslatorApp'])

      .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/todecimal', {
          templateUrl: 'roman-to-integer/roman-to-integer.template.html',
          controller: 'RomantoIntegerController as ic'
        });
      }]);