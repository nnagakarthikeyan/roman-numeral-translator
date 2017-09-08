'use strict';

  angular.module('intergertoRomanApp', ['ngRoute','romanTranslatorApp'])

      .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/toroman', {
          templateUrl: 'integer-to-roman/integer-to-roman.template.html',
          controller: 'IntegertoRomanController as rc'
        });
      }]);