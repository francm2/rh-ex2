'use strict';

angular
  .module('core.user')
  .factory('Phone', ['$resource',
  function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users/:userId', {userId: '@id'}, {
      query: {
        method: 'GET',
        //params: {userId: 'users'},
        isArray: true
      }
    });
  }
]);
