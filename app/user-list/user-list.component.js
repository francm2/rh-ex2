'use strict';

// Register <user-list> component, along with its associated controller and template
angular
  .module('userList')
  .component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['userService',
      function UserListController(userService) {
        this.users = userService.query();
        this.orderProp = 'name';
      }
    ]
  });
