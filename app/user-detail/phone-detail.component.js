'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular
  .module('phoneDetail')
  .component('phoneDetail', {
    templateUrl: 'user-detail/phone-detail.template.html',
    controller: ['$routeParams', '$scope', 'userService',
      function PhoneDetailController($routeParams, $scope, userService) {

        // Add the user to scope to access from HTML
        this.phone = userService.query({
          id: $routeParams.userId
        }).$promise.then(function(user) {
            $scope.user = user[0];
          }
        );
      }]
  });
