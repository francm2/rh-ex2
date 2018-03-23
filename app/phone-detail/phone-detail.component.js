'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular
  .module('phoneDetail')
  .component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', '$scope', 'Phone',
      function PhoneDetailController($routeParams, $scope, Phone) {

        // Add the user to scope to access from HTML
        this.phone = Phone.query({
          id: $routeParams.userId
          //user: $routeParams.userId
        }).$promise.then(function(user) {
            $scope.user = user[0];
            console.log(user[0].id);
          }
        );
      }]
  });
