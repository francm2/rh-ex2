'use strict';

angular.
  module('userApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/users', {
          template: '<user-list></user-list>'
        }).
        when('/users/:userId', {
          template: '<user-detail></user-detail>'
        }).
        otherwise('/users');
    }
  ]);
