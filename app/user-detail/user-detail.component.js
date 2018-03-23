'use strict';

// Register <user-detail> component, along with its associated controller and template
angular
  .module('userDetail')
  .component('userDetail', {
    templateUrl: 'user-detail/user-detail.template.html',
    controller: ['$routeParams', '$scope', 'userService',
      function PhoneDetailController($routeParams, $scope, userService) {

        // Add the user to scope to access from HTML
        this.user = userService.query({
          id: $routeParams.userId
        }).$promise.then(function(user) {
            $scope.user = user[0];
          }
        );
      }]
  });
