'use strict';

angular
  .module('core.user')
  .factory('userService', ['$resource',
  function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users/:userId', {userId: '@id'}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  }
]);
